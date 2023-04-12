import React, { useContext } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { ErrorContext } from './helpers/ErrorContext';
import { ErrorText } from './types/ErrorText';
import { CoursesContext } from './helpers/CoursesContext';
import './App.scss';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader/Loader';

export const App: React.FC = () => {
  const { error, setError } = useContext(ErrorContext);
  const { isLoad } = useContext(CoursesContext);

  return (
    <div className="app">
      <Header />

      {isLoad ? (<Loader />) : (<Outlet />)}

      <Footer />

      <Snackbar
        open={error !== ErrorText.NONE}
        autoHideDuration={5000}
        onClose={() => setError(ErrorText.NONE)}
        className="snackbar"
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity="error">
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
};
