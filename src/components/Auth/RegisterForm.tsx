import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import validator from 'validator';
import { User } from '../../types/User';

type Props = {
  setUser: (user: User) => void
};

export const RegisterForm = ({ setUser }: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const isValidateEmail = validator.isEmail(email);
  const isValidateName = validator.isByteLength(name, { min: 4 });

  const handleNameChange = (event: { target: { value: string }; }) => {
    setName(event.target.value.trim());
  };

  const handleEmailChange = (event: { target: { value: string }; }) => {
    setEmail(event.target.value.trim());
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://mate.academy/students-api/users', {
        name,
        email,
      });
      const user = response.data;

      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div
      className="form"
    >
      <TextField
        label="Ім'я"
        variant="outlined"
        className="text-field"
        value={name}
        required
        error={!isValidateName && name !== ''}
        onChange={handleNameChange}
      />
      <TextField
        label="Ел. пошта"
        variant="outlined"
        className="text-field"
        value={email}
        required
        error={!isValidateEmail && email !== ''}
        onChange={handleEmailChange}
      />
      <Button
        variant="contained"
        color="primary"
        className="button"
        disabled={!isValidateEmail || !isValidateName}
        onClick={handleSubmit}
      >
        Зареєструватись
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

export default RegisterForm;
