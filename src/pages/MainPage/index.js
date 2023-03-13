import React, { useEffect, useState, useContext } from 'react';

import { Container, BoxLoading } from './styles';
import DashboardController from '../../components/DashboardController';
import { CircularProgress } from "@mui/material";

import { getUsers } from "../../services/users";
import { getGames } from "../../services/games";
import DashboardUsers from '../../components/Dashboards/DashboardUsers';
import DashboardGames from '../../components/Dashboards/DashboardGames';
import { UserDashboardContext } from "../../hooks/Context/Dashboard";

const MainPage = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [users, setUsers] = useState(null);
  const [games, setGames] = useState(null);
  const [title, setTitle] = useState('Games');
  let userDashboard = useContext(UserDashboardContext);

  if (title === 'Users') {
    userDashboard = true;
  }

  const handleGetUsers = async() => {
    try {
      const response = await getUsers();
      setUsers(response);
    } catch (error) {
      console.log("error", error)
    }
  }

  const handleGetGames = async() => {
    try {
      const response = await getGames();
      setGames(response);
      setDashboardData(response)
    } catch (error) {
      console.log("error", error)
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

    <UserDashboardContext.Provider value={userDashboard}>
      <Container>
        <DashboardController 
          users={users} 
          games={games} 
          setDashboardData={setDashboardData}
        />
        { games && !userDashboard &&
            <DashboardGames 
              data={games}
              setGames={setGames}
            />
        } 
        { users && userDashboard &&
            <DashboardUsers
              title={title} 
              userDashboard={userDashboard} 
              setUsers={setUsers}
              users={users}
            />
        }
        {!games && !users &&
          <BoxLoading>
            <CircularProgress />
          </BoxLoading>
        }
      </Container>
    </UserDashboardContext.Provider>
  );
}

export default MainPage;