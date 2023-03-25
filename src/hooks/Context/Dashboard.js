import React, { useState, createContext } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [gamesIsSelected, setGamesIsSelected] = useState(true);
  const [usersIsSelected, setUsersIsSelected] = useState(false);

  return (
    <StateContext.Provider value={{ 
      gamesIsSelected, 
      setGamesIsSelected, 
      usersIsSelected, 
      setUsersIsSelected 
    }}>
      {children}
    </StateContext.Provider>
  );
};