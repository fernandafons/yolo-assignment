import React, { useState } from 'react';

import { Container, GamesButton, UsersButton, ButtonText, VerticalLine } from './styles';


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
          <ButtonText>Games</ButtonText>
        </GamesButton>
        <VerticalLine />
        <UsersButton isSelected={usersIsSelected} onClick={() => handleClick(users)}>
          <ButtonText>Users</ButtonText>
        </UsersButton>
      </Container>
    </>
  )
}

export default DashboardController;