import React, { useEffect, useContext } from 'react';
import { useLocalStorage } from './useLocaleStorage';
import { postRefreshToken } from './api';
import { ErrorText } from '../types/ErrorText';
import { ErrorContext } from './ErrorContext';

interface Tokens {
  access: string,
  refresh: string,
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

type Props = {
  children: React.ReactNode;
};

export const LocaleStorageProvider = ({ children }: Props) => {
  const [tokens, setTokens] = useLocalStorage('tokens');
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
    }, 15 * 1000);

    return () => clearInterval(intervalId);
  }, [tokens]);

  return (
    <TokenContext.Provider value={{
      tokens,
      setTokens,
    }}
    >
      {children}
    </TokenContext.Provider>
  );
};
