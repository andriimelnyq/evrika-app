import React, { useEffect, useContext } from 'react';
import { useLocalStorage } from './useLocaleStorage';
import { postRefreshToken } from './api';
import { ErrorText } from '../types/ErrorText';
import { ErrorContext } from './ErrorContext';
import { CourseDetailsType } from '../types/CourseDetailsType';

interface Tokens {
  access: string,
  refresh: string,
}

interface SelectedCoursesType {
  selectedCourses: CourseDetailsType[],
  setSelectedCourses: (selectedCourses: CourseDetailsType[]) => void,
}

type TokenContextType = {
  tokens: Tokens,
  setTokens: (tokens: Tokens) => void,
};

export const TokenContext = React.createContext<TokenContextType>({
  tokens: {
    access: '',
    refresh: '',
  },
  setTokens: () => {},
});

export const SelectedCoursesContext = React.createContext<SelectedCoursesType>({
  selectedCourses: [],
  setSelectedCourses: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const LocaleStorageProvider = ({ children }: Props) => {
  const [tokens, setTokens] = useLocalStorage('tokens');
  const [selectedCourses, setSelectedCourses] = useLocalStorage('selectedCourses');
  const { setError } = useContext(ErrorContext);
  const { refresh } = tokens;

  const handleRefreshToken = async () => {
    if (refresh) {
      try {
        const response = await postRefreshToken(refresh);

        setTokens({
          access: response.access,
          refresh: response.refresh,
        });
      } catch {
        setError(ErrorText.REFRESH_TOKEN);
      }
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleRefreshToken();
    }, 5 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [tokens]);

  return (
    <TokenContext.Provider value={{
      tokens,
      setTokens,
    }}
    >
      <SelectedCoursesContext.Provider value={{
        selectedCourses,
        setSelectedCourses,
      }}
      >
        {children}
      </SelectedCoursesContext.Provider>
    </TokenContext.Provider>
  );
};
