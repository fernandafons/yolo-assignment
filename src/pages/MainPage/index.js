import React from 'react';

import { Container, Title } from './styles';
import Dashboard from '../../components/Dashboard';

const MainPage = () => {
  return (
    <Container>
    <Dashboard title="Games"/>
    <Dashboard title="Users"/>
    </Container>
  );
}

export default MainPage;