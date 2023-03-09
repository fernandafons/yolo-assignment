import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import DashboardController from '../../components/DashboardController';
import Dashboard from '../../components/Dashboard';
import { games } from "../../data";

const MainPage = () => {
  const [dashboardData, setDashboardData] = useState(games);
  const [title, setTitle] = useState('Games');

  useEffect(() => {
    if (dashboardData === games) {
      setTitle('Games');
    } else {
      setTitle('Users');
    }
  }, [dashboardData])
  
  return (
    <Container>
    <DashboardController setDashboardData={setDashboardData}/>
    <Dashboard title={title} data={dashboardData}/>
    </Container>
  );
}

export default MainPage;