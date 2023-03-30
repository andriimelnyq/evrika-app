import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { NavLinks } from '../../types/NavLinks';
import './Header.scss';
import { UserContext } from '../../helpers/LocaleStorageContext';

export const Header = () => {
  const navLinks = Object.keys(NavLinks);
  const navLinksHeader = Object.values(NavLinks);
  const { user, setUser } = useContext(UserContext);
  const handleLogOut = () => {
    localStorage.removeItem('user');
    setUser(null);
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
            className="header__link"
          >
            {navLinksHeader[i]}
          </Link>
        ))}
      </div>

      {user
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
