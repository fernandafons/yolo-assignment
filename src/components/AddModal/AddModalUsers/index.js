import React, { useState, useEffect } from 'react';
import { CircularProgress } from "@mui/material";

import { Container, Title, BoxForms, BoxInput, Text, Input, AddButton, Box, HelpText } from '../styles';

import { addUsers } from '../../../services/users';

const AddModalUsers = ({ setVisible, users, setUsers }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [errorAddress, setErrorAddress] = useState('');
  const errorMessage = 'This field is required';
  const invalidEmailMessage = 'Invalid email address';
  const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const handleAdd = async() => {
    if (name === '') {
      setErrorName(true);
      return;
    }
    if (email === '') {
      setErrorEmail(true);
      return;
    }
    if (!EMAIL_REGEX.test(email)) {
      setInvalidEmail(true);
      return;
    }
    if (address === '') {
      setErrorAddress(true);
      return;
    }
    
    setLoading(true);
    try {
      const id = users.length >1 ? users[users.length-1].id+1 : 1;
      const newValue = {
        id: id,
        name: name,
        email: email,
        address: address,
      }
      const response = await addUsers(users, newValue);
      setUsers(response)
      setVisible(false)
    } catch (error) {
      console.log("error message", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    setErrorName(false);
    setErrorEmail(false);
    setErrorAddress(false);
    setInvalidEmail(false);
  }, [name, email, address]);


  return (
    <Container>
      <Title>Add User</Title>
      <BoxForms>
        <Box>
          <BoxInput>
            <Text>Name: </Text>
            <Input 
              required
              autoFocus
              placeholder='Type name' 
              onChange={(event) => setName(event.target.value)} 
            />
          </BoxInput>
          {errorName && <HelpText>{errorMessage}</HelpText>}
        </Box>
        <Box>
          <BoxInput>
            <Text>Email:</Text>
            <Input 
              type={email}
              placeholder='Type email'
              onChange={(event) => setEmail(event.target.value)} 
            />
          </BoxInput>
          {errorEmail && <HelpText>{errorMessage}</HelpText>}
          {invalidEmail && <HelpText>{invalidEmailMessage}</HelpText>}
        </Box>
        <Box>
          <BoxInput>
            <Text>Address:</Text>
            <Input 
              required
              placeholder='Type address'
              onChange={(event) => setAddress(event.target.value)} 
            />
          </BoxInput>
          {errorAddress && <HelpText>{errorMessage}</HelpText>}
        </Box>
      </BoxForms>
      <AddButton onClick={handleAdd}>
        {!loading && 'Add new User'}
        {loading && <CircularProgress size={20}/>}
      </AddButton>
    </Container>
  )
}

export default AddModalUsers;