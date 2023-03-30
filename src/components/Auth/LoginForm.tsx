import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import validator from 'validator';
import { User } from '../../types/User';
import './Form.scss';

type Props = {
  setUser: (user: User) => void
};

export const LoginForm = ({ setUser }: Props) => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const isValidateEmail = validator.isEmail(email);

  const handleEmailChange = (event: { target: { value: string }; }) => {
    setEmail(event.target.value.trim());
  };

  const handleBack = () => window.history.back();

  const handleSubmit = async () => {
    try {
      const response = await axios.get(`https://mate.academy/students-api/users?email=${email}`);
      const users = response.data;
      const user = users[0];

      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
        handleBack();
      } else {
        setErrorMessage('Перевірте дані або зареєструйтесь!');
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div
      className="form"
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
      <Button
        variant="contained"
        className="button"
        color="primary"
        disabled={!isValidateEmail}
        onClick={handleSubmit}
      >
        Увійти
      </Button>
      <Snackbar
        open={errorMessage !== ''}
        autoHideDuration={5000}
        message={errorMessage}
        onClose={() => setErrorMessage('')}
        sx={{
          position: 'relative',
          top: '20px',
        }}
      />
    </div>
  );
};

export default LoginForm;
