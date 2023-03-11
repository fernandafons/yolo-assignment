import { GAMES } from "./mockData";

export const getGames = async() => {
  await new Promise(response => setTimeout(response, 2000))
  return GAMES
}

export const editGames = async(currentGames, newData) => {
  await new Promise(response => setTimeout(response, 2000))
  let games = currentGames.filter(item => item.id !== newData.id);
  const newGames = [...games, newData];
  console.log('currentGames',currentGames)
  console.log('newData',newData)
  console.log('newGames',newGames.sort((a, b) => a.id - b.id))
  return newGames.sort((a, b) => a.id - b.id);
}

// return filter-id enviado
// edit, importa, pega oq foi editado, retorna tudo + oq foi editado