import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { createTheme, ThemeProvider } from '@mui/material';
import { HashRouter, Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { LocaleStorageProvider } from './helpers/LocaleStorageContext';
import { CoursesProvider } from './helpers/CoursesContext';
import { ErrorProvider } from './helpers/ErrorContext';
import { NotificationProvider } from './helpers/NotificationContext';
import { AuthForm } from './components/Auth/AuthForm';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailsPage } from './pages/CourseDetailsPage';
import { SelectedPage } from './pages/SelectedPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#49BBBD',
    },
    secondary: {
      main: '#49BBBD',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <NotificationProvider>
        <ErrorProvider>
          <LocaleStorageProvider>
            <CoursesProvider>
              <HashRouter>
                <Routes>
                  <Route path="/" element={<App />}>
                    <Route path="home" element={<Navigate to="/" replace />} />
                    <Route index element={<HomePage />} />

                    <Route path="auth" element={<AuthForm />} />

                    <Route path="courses" element={<CoursesPage />} />
                    <Route
                      path="courses/:courseId"
                      element={<CourseDetailsPage />}
                    />

                    <Route path="selected" element={<SelectedPage />} />
                  </Route>
                </Routes>
              </HashRouter>
            </CoursesProvider>
          </LocaleStorageProvider>
        </ErrorProvider>
      </NotificationProvider>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root'),
);
