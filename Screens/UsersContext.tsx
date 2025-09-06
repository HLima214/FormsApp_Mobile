import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface User {
  nome: string;
  email: string;
  avatar: string;
}

interface UsersContextType {
  users: User[];
  addUser: (user: User) => void;
}

export const UsersContext = createContext<UsersContextType | undefined>(undefined);

export const UsersProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => setUsers([...users, user]);

  return (
    <UsersContext.Provider value={{ users, addUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error('useUsers must be used within a UsersProvider');
  }
  return context;
};

// Removido código solto e exemplos não utilizados