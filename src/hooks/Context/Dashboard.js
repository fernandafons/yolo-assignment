import { createContext } from 'react';
import { GAMES, USERS } from "../../services/mockData";

export const UserDashboardContext = createContext(false);
export const CurrentDashboardContext = createContext(GAMES);
export const CurentGamesContext = createContext(GAMES);
export const CurentUserContext = createContext(USERS);
