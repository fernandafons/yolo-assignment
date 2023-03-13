import React, { useState, useContext } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { CircularProgress } from "@mui/material";

import { Container, Title, BoxForms, BoxInput, Text, Input, EditButton } from './styles';

import { UserDashboardContext } from "../../hooks/Context/Dashboard";
import { editGames } from '../../services/games';

const EditModal = ({ item, data, setGames, setVisible }) => {
  const userDashboard = useContext(UserDashboardContext);

  const [newName, setNewName] = useState(item.name);
  const [newCategory, setNewCategory] = useState(item.category);
  const [newCreatedAt, setNewCreatedAt] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleEdit = async() => {
    setLoading(true);
    try {
      if (!userDashboard) {
        const newValue = {
          id: item.id,
          name: newName,
          category: newCategory,
          created_at: newCreatedAt ? newCreatedAt.toString() : item.created_at,
        }
        const response = await editGames(data, newValue);
        setGames(response)
        setVisible(false)
      }
    } catch (error) {
      console.log("error message", error);
    }
    setLoading(false);
  }

  return (
    <Container>
      <Title>Edit {item.name}</Title>
      <BoxForms>
        <BoxInput>
          <Text>Name:</Text>
          <Input 
            autoFocus
            value={newName} 
            onChange={(event) => setNewName(event.target.value)} 
          />
        </BoxInput>
        <BoxInput>
          <Text>Category:</Text>
          <Input 
            value={newCategory}
            onChange={(event) => setNewCategory(event.target.value)}
          />
        </BoxInput>
        <BoxInput>
          <Text>Created at:</Text>
          <DatePicker 
            label={item.created_at}
            value={newCreatedAt}
            onChange={(event) => setNewCreatedAt(event)} 
            sx={{height: '10%'}}
          />
        </BoxInput>
      </BoxForms>
      <EditButton onClick={handleEdit}>
        {!loading && `Edit ${item.name}`}
        {loading && <CircularProgress size={20}/>}
      </EditButton>
    </Container>
  )
}

export default EditModal;