import React, { useState } from 'react';

import { Container, Title, BoxForms, BoxInput, Text, Input, AddButton } from './styles';

import { editUsers } from '../../services/users';

const EditModalUsers = ({ item, users, setUsers, setVisible }) => {

  const [newName, setNewName] = useState(item.name);
  const [newEmail, setNewEmail] = useState(item.email);
  const [newAddress, setNewAddress] = useState(item.address);

  const handleEdit = async() => {
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
      console.log("error message", error);
    }
  }

  return (
    <Container>
      <Title>Edit {item.name}</Title>
      <BoxForms>
        <BoxInput>
          <Text>Name: </Text>
          <Input 
            value={newName} 
            onChange={(event) => setNewName(event.target.value)} 
          />
        </BoxInput>
        <BoxInput>
          <Text>Email:</Text>
          <Input 
            value={newEmail}
            onChange={(event) => setNewEmail(event.target.value)}
          />
        </BoxInput>
        <BoxInput>
          <Text>Address:</Text>
          <Input 
            value={newAddress} 
            onChange={(event) => setNewAddress(event.target.value)}
          />
        </BoxInput>
      </BoxForms>
      {/* botar loading */}
      <AddButton onClick={() => handleEdit()}>Edit {item.name}</AddButton>
    </Container>
  )
}

export default EditModalUsers;