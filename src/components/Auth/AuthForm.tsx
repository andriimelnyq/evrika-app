import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { UserContext } from '../../helpers/LocaleStorageContext';
import './AuthForm.scss';

export const AuthForm = () => {
  const [needToRegister, setNeedToRegister] = useState(false);
  const { setUser } = useContext(UserContext);

  return (
    <section
      className="auth-form"
    >
      <div className="container">
        <div className="auth-form__content">
          <div className="auth-form__img">
            <img src="img/auth_img.jpg" alt="auth img" />
          </div>

          <div className="auth-form__main">
            <Typography variant="h5">
              Вас вітає сервіс позашкільної освіти для дітей &quot;Еврика&quot;!
            </Typography>

            <div className="auth-form__control">
              <Button
                variant={!needToRegister ? 'contained' : 'outlined'}
                sx={{
                  height: '75%',
                  display: 'flex',
                  alignSelf: 'center',
                }}
                color="primary"
                className="button"
                onClick={() => setNeedToRegister(false)}
              >
                Вхід
              </Button>

              <Button
                variant={needToRegister ? 'contained' : 'outlined'}
                sx={{
                  height: '75%',
                  display: 'flex',
                  alignSelf: 'center',
                }}
                color="primary"
                className="button"
                onClick={() => setNeedToRegister(true)}
              >
                Реєстрація
              </Button>
            </div>

            {needToRegister
              ? (<RegisterForm setUser={setUser} />)
              : (<LoginForm setUser={setUser} />)}
          </div>
        </div>
      </div>
    </section>
  );
};
