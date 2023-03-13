import React, { useState } from 'react';

import { Container, GamesButton, UsersButton, ButtonText } from './styles';


const DashboardController = ({ setDashboardData, users, games }) => {
  const [gamesIsSelected, setGamesIsSelected] = useState(true);
  const [usersIsSelected, setUsersIsSelected] = useState(false);

  function handleClick(item) {
    setDashboardData(item);
    setGamesIsSelected(!gamesIsSelected);
    setUsersIsSelected(!usersIsSelected);
  }

  return (
    <>
      <Container>
        <GamesButton isSelected={gamesIsSelected} onClick={() => handleClick(games)}>
          <ButtonText isSelected={gamesIsSelected}>Games</ButtonText>
        </GamesButton>
        <UsersButton isSelected={usersIsSelected} onClick={() => handleClick(users)}>
          <ButtonText isSelected={usersIsSelected}>Users</ButtonText>
        </UsersButton>
      </Container>
    </>
  )
}

export default DashboardController;