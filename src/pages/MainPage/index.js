import React, { useEffect, useState, useContext } from 'react';

import { Container } from './styles';
import DashboardController from '../../components/DashboardController';

import { getUsers } from "../../services/users";
import { getGames } from "../../services/games";
import DashboardUsers from '../../components/DashboardUsers';
import DashboardGames from '../../components/DashboardGames';
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
              // data={dashboardData} 
              userDashboard={userDashboard} 
              setUsers={setUsers}
              users={users}
            />
            // colocar loading
        }
        {/* <Loading/ > material */}
      </Container>
    </UserDashboardContext.Provider>
  );
}

export default MainPage;