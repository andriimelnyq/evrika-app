import React, { useMemo, useState } from 'react';

interface LoaderContextType {
  isLoad: boolean,
  setIsLoad: (isLoad: boolean) => void,
}

export const LoaderContext = React.createContext<LoaderContextType>({
  isLoad: false,
  setIsLoad: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const LoaderProvider = ({ children }: Props) => {
  const [isLoad, setIsLoad] = useState(false);

  const contextValues = useMemo(() => (
    {
      isLoad,
      setIsLoad,
    }
  ), [isLoad]);

  return (
    <LoaderContext.Provider value={contextValues}>
      {children}
    </LoaderContext.Provider>
  );
};
