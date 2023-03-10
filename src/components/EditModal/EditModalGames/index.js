import React, { useState } from 'react';
import { CircularProgress } from "@mui/material";

import { Container, Title, BoxForms, BoxInput, Text, Input, EditButton, DateInput } from '../styles';

import { editGames } from '../../../services/games';

const EditModalGames = ({ item, data, setGames, setVisible }) => {

  const [newName, setNewName] = useState(item.name);
  const [newCategory, setNewCategory] = useState(item.category);
  const [newCreatedAt, setNewCreatedAt] = useState(null);
  const [loading, setLoading] = useState(false);

  let formatedDate = new Date(item.created_at);
  const month = formatedDate.getUTCMonth() + 1; //months from 1-12
  const day = formatedDate.getUTCDate();
  const year = formatedDate.getUTCFullYear();
  formatedDate = day + "/" + month + "/" + year;

  const handleEdit = async() => {
    setLoading(true);
    try {
      const newValue = {
        id: item.id,
        name: newName,
        category: newCategory,
        created_at: newCreatedAt ? newCreatedAt.toString() : item.created_at,
      }
      const response = await editGames(data, newValue);
      setGames(response)
      setVisible(false)
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
          <Text>Date:</Text>
          <DateInput 
            label={formatedDate}
            value={newCreatedAt}
            onChange={(event) => setNewCreatedAt(event)} 
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

export default EditModalGames;