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

export const deleteUsers = async(currentUsers, selectedData) => {
  await new Promise(response => setTimeout(response, 1000))
  return currentUsers.filter(item => item.id !== selectedData.id);
}

export const addUsers = async(currentUsers, newData) => {
  await new Promise(response => setTimeout(response, 1000))
  return [...currentUsers, newData];
}
