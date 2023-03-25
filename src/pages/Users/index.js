import React, { useEffect, useState } from 'react';

import { Container, BoxLoading } from './styles';
import DashboardController from '../../components/DashboardController';
import { CircularProgress } from "@mui/material";

import { getUsers } from "../../services/users";
import DashboardUsers from '../../components/Dashboards/DashboardUsers';

const Users = () => {
  const [users, setUsers] = useState(null);

  const handleGetUsers = async() => {
    try {
      const response = await getUsers();
      setUsers(response);
    } catch (error) {
      console.log("error", error)
    }
  };

  useEffect(() => {
    handleGetUsers()
  }, []);
  
  return (
      <Container>
        <DashboardController />
        { users &&
            <DashboardUsers
              users={users}
              setUsers={setUsers}
            />
        }
        { !users &&
          <BoxLoading>
            <CircularProgress />
          </BoxLoading>
        }
      </Container>
  );
}

export default Users;