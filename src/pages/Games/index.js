import React, { useEffect, useState } from 'react';

import { Container, BoxLoading } from './styles';
import DashboardController from '../../components/DashboardController';
import { CircularProgress } from "@mui/material";

import { getGames } from "../../services/games";
import DashboardGames from '../../components/Dashboards/DashboardGames';

const Games = () => {
  const [games, setGames] = useState(null);

  const handleGetGames = async() => {
    try {
      const response = await getGames();
      setGames(response);
    } catch (error) {
      console.log("error", error)
    }
  };

  useEffect(() => {
    handleGetGames();
  }, []);

  return (
      <Container>
        <DashboardController />
        { games &&
            <DashboardGames 
              data={games}
              setGames={setGames}
            />
        }
        {!games &&
          <BoxLoading>
            <CircularProgress />
          </BoxLoading>
        }
      </Container>
  );
}

export default Games;