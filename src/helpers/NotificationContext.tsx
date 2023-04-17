import React, { useMemo, useState } from 'react';

interface NotificationContextType {
  notification: string,
  setNotification: (text: string) => void,
}

export const NotificationContext = React.createContext<NotificationContextType>({
  notification: '',
  setNotification: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const NotificationProvider = ({ children }: Props) => {
  const [notification, setNotification] = useState('');

  const ErrorContextValues = useMemo(() => (
    {
      notification,
      setNotification,
    }
  ), [notification]);

  return (
    <NotificationContext.Provider value={ErrorContextValues}>
      {children}
    </NotificationContext.Provider>
  );
};
