import { Typography } from '@mui/material';
import React from 'react';
import './Banner.scss';

export const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner__content">
          <div className="banner__info">
            <Typography
              variant="h3"
              sx={{ color: '#FFFFFF' }}
            >
              Навчатись ОНЛАЙН набагато легше!
            </Typography>

            <Typography
              variant="h6"
              sx={{ marginLeft: '100px' }}
            >
              ЕВРИКА - це платформа, яка використовує цікаві
              інтерактивні методи для навчання дітей
            </Typography>
          </div>

          <div className="banner__img">
            <img
              src="img/banner-girl.png"
              alt="banner img"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
