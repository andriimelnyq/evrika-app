import React, { useMemo, useState } from 'react';
import { ErrorText } from '../types/ErrorText';

interface ErrorContextType {
  error: ErrorText,
  setError: (error: ErrorText) => void,
}

export const ErrorContext = React.createContext<ErrorContextType>({
  error: ErrorText.NONE,
  setError: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const ErrorProvider = ({ children }: Props) => {
  const [error, setError] = useState(ErrorText.NONE);

  const ErrorContextValues = useMemo(() => (
    {
      error,
      setError,
    }
  ), [error]);

  return (
    <ErrorContext.Provider value={ErrorContextValues}>
      {children}
    </ErrorContext.Provider>
  );
};
