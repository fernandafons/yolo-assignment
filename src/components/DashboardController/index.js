import React, { useContext } from 'react';

import { Container, Button, ButtonText } from './styles';

import { useNavigate } from 'react-router-dom';
import { StateContext } from '../../hooks/Context/Dashboard';

const DashboardController = () => {
  const { 
    usersIsSelected, 
    setUsersIsSelected, 
    gamesIsSelected, 
    setGamesIsSelected 
  } = useContext(StateContext);

  const navigate = useNavigate();

  function handleClick(dashboardName) {
    if (dashboardName === 'users') {
      setUsersIsSelected(true);
      setGamesIsSelected(false);
      navigate('/users');
    } else {
      setUsersIsSelected(false);
      setGamesIsSelected(true);
      navigate('/games');
    }
    console.log('gamesIsSelected', gamesIsSelected);
    console.log('usersIsSelected', usersIsSelected);
  };

  return (
    <>
      <Container>
        <Button isSelected={gamesIsSelected} onClick={() => handleClick('games')}>
          <ButtonText isSelected={gamesIsSelected}>Games</ButtonText>
        </Button>
        <Button isSelected={usersIsSelected} onClick={() => handleClick('users')}>
          <ButtonText isSelected={usersIsSelected}>Users</ButtonText>
        </Button>
      </Container>
    </>
  )
}

export default DashboardController;