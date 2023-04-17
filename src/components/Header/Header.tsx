import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { NavLinks } from '../../types/NavLinks';
import { TokenContext, SelectedCoursesContext } from '../../helpers/LocaleStorageContext';
import './Header.scss';

interface Tokens {
  access: string,
  refresh: string,
}

export const Header = () => {
  const navLinks = Object.keys(NavLinks);
  const navLinksHeader = Object.values(NavLinks);
  const { tokens, setTokens } = useContext(TokenContext);
  const { selectedCourses } = useContext(SelectedCoursesContext);
  const handleLogOut = () => {
    setTokens({} as Tokens);
    localStorage.removeItem('tokens');
  };

  return (
    <section
      className="header"
    >
      <Link
        to="/"
      >
        <img
          src="icons/logo.svg"
          alt="logo"
          className="logo"
        />
      </Link>

      <div
        className="header__links"
      >
        {navLinks.map((link, i) => (
          <Link
            to={link}
            key={link}
            className="link"
          >
            {selectedCourses.length > 0 && link === 'selected' && (
              <div className="link__count-selected">
                {selectedCourses.length}
              </div>
            )}
            {navLinksHeader[i]}
          </Link>
        ))}
      </div>

      {tokens.access
        ? (
          <Button
            variant="contained"
            color="primary"
            className="button"
            sx={{
              height: '75%',
              display: 'flex',
              alignSelf: 'center',
              backgroundColor: '#F48C06',
            }}
            onClick={handleLogOut}
          >
            Вийти
          </Button>
        )
        : (
          <Button
            variant="contained"
            color="primary"
            className="button"
            sx={{
              height: '75%',
              display: 'flex',
              alignSelf: 'center',
              backgroundColor: '#F48C06',
              padding: '0',
            }}
          >
            <Link
              to="auth"
              className="header__link-join"
            >
              Увійти
            </Link>
          </Button>
        )}
    </section>
  );
};
