import React from 'react';

import { Container, Button, ButtonText, VerticalLine, HorizontalLine } from './styles';

import { games, users } from "../../data";

const DashboardController = ({ setDashboardData }) => {
  return (
    <>
      <Container>
        <Button onClick={() => setDashboardData(games)}>
          <ButtonText>Games</ButtonText>
        </Button>
        <VerticalLine />
        <Button onClick={() => setDashboardData(users)}>
          <ButtonText>Users</ButtonText>
        </Button>
      </Container>
      <HorizontalLine />
    </>
  )
}

export default DashboardController;