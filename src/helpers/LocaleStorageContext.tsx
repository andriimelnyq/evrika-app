import React, { useState, useEffect } from 'react';
import { User } from '../types/User';
// import { AuthForm } from '../components/Auth/AuthForm';

type UserContextType = {
  user: User | null,
  setUser: (user: User | null) => void,
};

export const UserContext = React.createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const LocaleStorageProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const data = localStorage.getItem('user');

    if (data !== null) {
      const curentUser = JSON.parse(data) as User;

      setUser(curentUser);
    }
  }, []);

  // if (!user) {
  //   return (<AuthForm setUser={setUser} />);
  // }

  return (
    <UserContext.Provider value={{
      user,
      setUser,
    }}
    >
      {children}
    </UserContext.Provider>
  );
};
