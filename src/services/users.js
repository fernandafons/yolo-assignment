import { USERS } from "./mockData";

export const getUsers = async() => {
  await new Promise(response => setTimeout(response, 1000))
  return USERS
}

export const editUsers = async(currentUsers, newData) => {
  await new Promise(response => setTimeout(response, 1000));
  let users = currentUsers.filter(item => item.id !== newData.id);
  const newUsers = [...users, newData];
  return newUsers.sort((a, b) => a.id - b.id);
}

export const deleteUsers = async(currentUsers, newData) => {
  await new Promise(response => setTimeout(response, 1000))
  return currentUsers.filter(item => item.id !== newData.id);
}

export const addUsers = async(currentUsers, newData) => {
  console.log('newData', newData);
  await new Promise(response => setTimeout(response, 1000))
  return [...currentUsers, newData];
}


// return filter-id enviado
// edit, importa, pega oq foi editado, retorna tudo + oq foi editado
// a gente a promisse para poder transpformar o settimeout em 
// sicrono e assim usar o await, para simular a chamada de uma api

