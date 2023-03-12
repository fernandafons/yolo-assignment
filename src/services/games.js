import { GAMES } from "./mockData";

export const getGames = async() => {
  await new Promise(response => setTimeout(response, 1000))
  return GAMES
}

export const editGames = async(currentGames, newData) => {
  await new Promise(response => setTimeout(response, 1000))
  let games = currentGames.filter(item => item.id !== newData.id);
  const newGames = [...games, newData];
  return newGames.sort((a, b) => a.id - b.id);
}

export const deleteGames = async(currentGames, newData) => {
  await new Promise(response => setTimeout(response, 1000))
  return currentGames.filter(item => item.id !== newData.id);
}

export const addGames = async(currentGames, newData) => {
  await new Promise(response => setTimeout(response, 1000))
  return [...currentGames, newData];
}
