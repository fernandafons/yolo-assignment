import React, { useState, useEffect } from 'react';
import { CircularProgress } from "@mui/material";

import { Container, Title, BoxForms, BoxInput, Text, Input, EditButton, Box, HelpText } from '../styles';

import { editUsers } from '../../../services/users';

const EditModalUsers = ({ item, users, setUsers, setVisible }) => {

  const [newName, setNewName] = useState(item.name);
  const [newEmail, setNewEmail] = useState(item.email);
  const [newAddress, setNewAddress] = useState(item.address);
  const [loading, setLoading] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [errorAddress, setErrorAddress] = useState('');
  const errorMessage = 'This field is required';
  const invalidEmailMessage = 'Invalid email address';
  const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const handleEdit = async() => {
    if (newName === '') {
      setErrorName(true);
      return;
    }
    if (newEmail === '') {
      setErrorEmail(true);
      return;
    }
    if (!EMAIL_REGEX.test(newEmail)) {
      setInvalidEmail(true);
      return;
    }
    if (newAddress === '') {
      setErrorAddress(true);
      return;
    }
    setLoading(true);
    try {
        const newValue = {
          id: item.id,
          name: newName,
          email: newEmail,
          address: newAddress,
        }
        const response = await editUsers(users, newValue);
        setUsers(response)
        setVisible(false)
    } catch (error) {
      console.log("error", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    setErrorName(false);
    setErrorAddress(false)
    setInvalidEmail(false);
    setErrorEmail(false);
  }, [newName, newEmail, newAddress]);

  return (
    <Container>
      <Title>Edit {item.name}</Title>
      <BoxForms>
        <Box>
          <BoxInput>
            <Text>Name: </Text>
            <Input 
              autoFocus
              value={newName} 
              onChange={(event) => setNewName(event.target.value)} 
            />
          </BoxInput>
          {errorName && <HelpText>{errorMessage}</HelpText>}
        </Box>
        <Box>
          <BoxInput>
            <Text>Email:</Text>
            <Input 
              value={newEmail}
              onChange={(event) => setNewEmail(event.target.value)}
            />
          </BoxInput>
          {errorEmail && <HelpText>{errorMessage}</HelpText>}
          {invalidEmail && <HelpText>{invalidEmailMessage}</HelpText>}
        </Box>
        <Box>
          <BoxInput>
            <Text>Address:</Text>
            <Input 
              value={newAddress} 
              onChange={(event) => setNewAddress(event.target.value)}
            />
          </BoxInput>
          {errorAddress && <HelpText>{errorMessage}</HelpText>}
        </Box>
      </BoxForms>
      <EditButton onClick={handleEdit}>
        {!loading && `Edit ${item.name}`}
        {loading && <CircularProgress size={20}/>}
      </EditButton>
    </Container>
  )
}

export default EditModalUsers;