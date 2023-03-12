import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { CircularProgress } from "@mui/material";

import { Container, Title, BoxForms, BoxInput, Text, Input, AddButton } from './styles';

import { addGames } from '../../services/games';

const AddModal = ({ setVisible, data, setGames }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAdd = async() => {
    setLoading(true);
    try {
      const id = data.length >1 ? data[data.length-1].id+1 : 1;
      const newValue = {
        id: id,
        name: name,
        category: category,
        created_at: createdAt.toString(),
      }
      const response = await addGames(data, newValue);
      setGames(response)
      setVisible(false)
    } catch (error) {
      console.log("error message");
    }
    setLoading(false);
  }
  return (
    <Container>
      <Title>Add Game</Title>
      <BoxForms>
        <BoxInput>
          <Text>Name: </Text>
          <Input 
            placeholder='Type name' 
            onChange={(event) => setName(event.target.value)} 
          />
        </BoxInput>
        <BoxInput>
          <Text>Category:</Text>
          <Input 
            placeholder='Type category'
            onChange={(event) => setCategory(event.target.value)} 
          />
        </BoxInput>
        <BoxInput>
          <Text>Created at:</Text>
          <DatePicker 
            label={'Choose date'}
            value={createdAt}
            onChange={(event) => setCreatedAt(event)} 
            slots={{
              textField: Input,
            }}
          />
        </BoxInput>
      </BoxForms>
      <AddButton onClick={handleAdd}>
        {!loading && 'Add new Game'}
        {loading && <CircularProgress size={20}/>}
      </AddButton>
      
    </Container>
  )
}

export default AddModal;