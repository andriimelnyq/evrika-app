import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

export const Footer = () => {
  return (
    <section
      className="footer"
    >
      <div className="footer__links">
        <Link
          to="/"
          className="link"
        >
          Права
        </Link>

        <Link
          to="/"
          className="link"
        >
          Контакти
        </Link>

        <Link
          to="courses"
          className="link"
        >
          Курси
        </Link>
      </div>

      <p>© 2023 EVRYKA Inc.</p>
    </section>
  );
};
