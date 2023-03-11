import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import DashboardController from '../../components/DashboardController';
import Dashboard from '../../components/Dashboard';

import { getUsers } from "../../services/users";
import { getGames } from "../../services/games";

const MainPage = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [users, setUsers] = useState(null);
  const [games, setGames] = useState(null);
  const [title, setTitle] = useState('Games');

  const handleGetUsers = async() => {
    try {
      const response = await getUsers();
      setUsers(response);
      // console.log(response);
    } catch (error) {
      // todo tratar isso aq
      console.log("error message")
    }
  }

  const handleGetGames = async() => {
    try {
      const response = await getGames();
      // console.log(response);
      setGames(response);
      setDashboardData(response)
    } catch (error) {
      // todo tratar isso aq
      console.log("error message")
    }
  }

  useEffect(() => {
    if (dashboardData === games) {
      setTitle('Games');
    } else {
      setTitle('Users');
    }
  }, [dashboardData, games])

  useEffect(() => {
    handleGetGames()
    handleGetUsers()
  }, [])

  useEffect(() => {
    setDashboardData(games);
  }, [games])
  
  return (
    <Container>
    <DashboardController 
      users={users} 
      games={games} 
      setDashboardData={setDashboardData}
    />
    { games && users && 
        <Dashboard title={title} data={dashboardData} setGames={setGames}/>
        // colocar loading
    }
    {/* <Loading/ > material */}
    </Container>
  );
}

export default MainPage;