import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';

import { Container, Title, BoxForms, BoxInput, Text, Input, AddButton } from './styles';

import { addGames } from '../../services/games';

const AddModal = ({ setVisible, data, setGames }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [createdAt, setCreatedAt] = useState('');

  const handleAdd = async() => {
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
            placeholder='Type date'
            value={createdAt}
            onChange={(event) => setCreatedAt(event)} 
          />
        </BoxInput>
      </BoxForms>
      <AddButton onClick={handleAdd}>Add new Game</AddButton>
    </Container>
  )
}

export default AddModal;