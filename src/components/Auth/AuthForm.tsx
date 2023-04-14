import React, { FormEvent, useState, useContext } from 'react';
import validator from 'validator';
import {
  TextField, Button, Typography, CircularProgress, InputAdornment, IconButton,
} from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { TokenContext } from '../../helpers/LocaleStorageContext';
import { ErrorContext } from '../../helpers/ErrorContext';
import { ErrorText } from '../../types/ErrorText';
import { postLogin, postRegister } from '../../helpers/api';
import './Form.scss';
import './AuthForm.scss';

export const AuthForm = () => {
  const [needToRegister, setNeedToRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const isValidateEmail = validator.isEmail(email);
  const isValidatePassword = validator.isByteLength(password, { min: 6 });
  const isValidateFirstName = validator.isByteLength(firstName, { min: 4 });
  const isValidateLastName = validator.isByteLength(lastName, { min: 4 });
  const { setTokens } = useContext(TokenContext);
  const { setError } = useContext(ErrorContext);

  const handleEmailChange = (event: { target: { value: string }; }) => {
    setEmail(event.target.value.trim());
  };

  const handlePasswordChange = (event: { target: { value: string }; }) => {
    setPassword(event.target.value.trim());
  };

  const handleFirstNameChange = (event: { target: { value: string }; }) => {
    setFirstName(event.target.value.trim());
  };

  const handleLastNameChange = (event: { target: { value: string }; }) => {
    setLastName(event.target.value.trim());
  };

  const handleBack = () => window.history.back();

  const handleSubmitLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await postLogin(email, password);
      const { access, refresh } = response.data;

      setTokens({
        access, refresh,
      });
      handleBack();
    } catch {
      setError(ErrorText.LOGIN);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await postRegister(email, password, firstName, lastName);
      await handleSubmitLogin(e);
    } catch {
      setError(ErrorText.REGISTRATION);
    } finally {
      setIsLoading(false);
    }
  };

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

            {isLoading
              ? (
                <CircularProgress
                  sx={{
                    margin: 'auto',
                  }}
                />
              )
              : (
                <form
                  className="form"
                  onSubmit={e => (!needToRegister ? handleSubmitLogin(e) : handleSubmitRegister(e))}
                >
                  <TextField
                    error={!isValidateEmail && email !== ''}
                    label="Ел. пошта"
                    variant="outlined"
                    className="text-field"
                    value={email}
                    required
                    onChange={handleEmailChange}
                  />

                  <TextField
                    label="Пароль"
                    variant="outlined"
                    className="text-field"
                    value={password}
                    required
                    type={isVisiblePassword ? 'text' : 'password'}
                    error={!isValidatePassword && password !== ''}
                    onChange={handlePasswordChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          sx={{
                            paddingRight: '10px',
                          }}
                        >
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setIsVisiblePassword(!isVisiblePassword)}
                            edge="end"
                          >
                            {isVisiblePassword
                              ? <VisibilityOutlinedIcon />
                              : <VisibilityOffOutlinedIcon />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  {needToRegister && (
                    <>
                      <TextField
                        label="Ім'я"
                        variant="outlined"
                        className="text-field"
                        value={firstName}
                        required
                        error={!isValidateFirstName && firstName !== ''}
                        onChange={handleFirstNameChange}
                      />
                      <TextField
                        label="Прізвище"
                        variant="outlined"
                        className="text-field"
                        value={lastName}
                        required
                        error={!isValidateLastName && lastName !== ''}
                        onChange={handleLastNameChange}
                      />

                      <Button
                        variant="contained"
                        color="primary"
                        className="button"
                        type="submit"
                        disabled={
                          !isValidateEmail
                        || !isValidateFirstName
                        || !isValidateLastName
                        || !isValidatePassword
                        }
                      >
                        Зареєструватись
                      </Button>
                    </>
                  )}

                  {!needToRegister && (
                    <Button
                      variant="contained"
                      className="button"
                      color="primary"
                      disabled={!isValidateEmail || !isValidatePassword}
                      type="submit"
                    >
                      Увійти
                    </Button>
                  )}
                </form>
              )}
          </div>
        </div>
      </div>
    </section>
  );
};
