import React, { useState, useContext } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import dayjs from "dayjs";

import { Container, Title, BoxForms, BoxInput, Text, Input, AddButton } from './styles';

import { UserDashboardContext } from "../../hooks/Context/Dashboard";
import { editGames } from '../../services/games';

const EditModal = ({ item, data, setGames, setVisible }) => {
  const userDashboard = useContext(UserDashboardContext);

  const [newName, setNewName] = useState(item.name)
  const [newCategory, setNewCategory] = useState(item.category)
  // console.log('item.created_at', item.created_at)
  const [newCreatedAt, setNewCreatedAt] = useState(null)

  const handleEdit = async() => {
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
  }

  return (
    <Container>
      <Title>Edit {item.name}</Title>
      <BoxForms>
        <BoxInput>
          <Text>Name:</Text>
          <Input 
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
            slots={{
              textField: Input,
            }}
          />
        </BoxInput>
      </BoxForms>
      {/* botar loading */}
      <AddButton onClick={() => handleEdit()}>Edit {item.name}</AddButton>
    </Container>
  )
}

export default EditModal;