import React, { useEffect, useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { CircularProgress } from "@mui/material";

import { Container, Title, BoxForms, BoxInput, Text, Input, AddButton } from '../styles';

import { addGames } from '../../../services/games';

const AddModalGames = ({ setVisible, data, setGames }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorCategory, setErrorCategory] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessageCategory, setErrorMessageCategory] = useState('');

  const handleAdd = async() => {
    if (name === '') {
      setError(true);
      setErrorMessage("This field is required");
      return;
    }
    if (category === '') {
      setErrorCategory(true);
      setErrorMessageCategory("This field is required");
      return;
    }

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
      console.log("error", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    setError(false);
    setErrorCategory(false);
    setErrorMessage('');
    setErrorMessageCategory('');
  }, [name, category]);

  return (
    <Container>
      <Title>Add Game</Title>
      <BoxForms>
        <BoxInput>
          <Text>Name: </Text>
          <Input 
            autoFocus
            required
            helperText={errorMessage}
            error={error}
            placeholder='Type name' 
            onChange={(event) => setName(event.target.value)} 
          />
        </BoxInput>
        <BoxInput>
          <Text>Category:</Text>
          <Input 
            required
            helperText={errorMessageCategory}
            error={errorCategory}
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
          />
        </BoxInput>
      </BoxForms>
      <AddButton onClick={handleAdd} >
        {!loading && 'Add new Game'}
        {loading && <CircularProgress size={20}/>}
      </AddButton>
    </Container>
  )
}

export default AddModalGames;