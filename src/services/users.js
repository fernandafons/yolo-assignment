import { USERS } from "./mockData";

export const getUsers = async() => {
  await new Promise(response => setTimeout(response, 2000))
  return USERS
}

// a gente a promisse para poder transpformar o settimeout em 
// sicrono e assim usar o await, para simular a chamada de uma api

