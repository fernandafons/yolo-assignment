import React, { useState } from 'react';

import { Container, Title, BoxForms, BoxInput, Text, Input, AddButton } from './styles';

import { addUsers } from '../../services/users';

const AddModalUsers = ({ setVisible, users, setUsers }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleAdd = async() => {
    try {
      console.log("users", users)
      const id = users.length >1 ? users[users.length-1].id+1 : 1;
      const newValue = {
        id: id,
        name: name,
        email: email,
        address: address,
      }
      console.log("newValue", newValue)
      const response = await addUsers(users, newValue);
      setUsers(response)
      setVisible(false)
    } catch (error) {
      console.log("error message", error);
    }
  }
  return (
    <Container>
      <Title>Add User</Title>
      <BoxForms>
        <BoxInput>
          <Text>Name: </Text>
          <Input 
            placeholder='Type name' 
            onChange={(event) => setName(event.target.value)} 
          />
        </BoxInput>
        <BoxInput>
          <Text>Email:</Text>
          <Input 
            placeholder='Type email'
            onChange={(event) => setEmail(event.target.value)} 
          />
        </BoxInput>
        <BoxInput>
          <Text>Address:</Text>
          <Input 
            placeholder='Type address'
            onChange={(event) => setAddress(event.target.value)} 
          />
        </BoxInput>
      </BoxForms>
      <AddButton onClick={handleAdd}>Add new User</AddButton>
    </Container>
  )
}

export default AddModalUsers;