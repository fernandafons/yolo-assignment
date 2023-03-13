import React, { useEffect, useState } from 'react';
import { CircularProgress } from "@mui/material";

import { 
  Container, 
  Title, 
  BoxForms, 
  BoxInput, 
  Text, 
  Input, 
  AddButton, 
  HelpText, 
  Box, 
  DateInput 
} from '../styles';

import { addGames } from '../../../services/games';

const AddModalGames = ({ setVisible, data, setGames }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorCategory, setErrorCategory] = useState(false);
  const [errorDate, setErrorDate] = useState('');
  const errorMessage = 'This field is required';

  const handleAdd = async() => {
    if (name === '') {
      setError(true);
      return;
    }
    if (category === '') {
      setErrorCategory(true);
      return;
    }
    if (createdAt === '') {
      setErrorDate(true);
      return;
    }

    setLoading(true);
    try {
      const id = data.length > 1 ? data[data.length-1].id+1 : 1;
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
    setErrorDate(false)
  }, [name, category, createdAt]);

  return (
    <Container>
      <Title>Add Game</Title>
      <BoxForms>
        <Box>
          <BoxInput>
            <Text>Name: </Text>
              <Input 
                autoFocus
                required
                error={error}
                placeholder='Type name' 
                onChange={(event) => setName(event.target.value)} 
              />
          </BoxInput>
          {error && <HelpText>{errorMessage}</HelpText>}
        </Box>
        <Box>
          <BoxInput>
            <Text>Category:</Text>
            <Input 
              required
              error={errorCategory}
              placeholder='Type category'
              onChange={(event) => setCategory(event.target.value)} 
            />
          </BoxInput>
          {errorCategory && <HelpText>{errorMessage}</HelpText>}
        </Box>
        <Box>
          <BoxInput>
            <Text>Date:</Text>
            <DateInput 
              label={'Choose date'}
              value={createdAt}
              onChange={(event) => setCreatedAt(event)} 
            />
          </BoxInput>
          {errorDate && <HelpText>{errorMessage}</HelpText>}
        </Box>
      </BoxForms>
      <AddButton onClick={handleAdd} >
        {!loading && 'Add new Game'}
        {loading && <CircularProgress size={20}/>}
      </AddButton>
    </Container>
  )
}

export default AddModalGames;