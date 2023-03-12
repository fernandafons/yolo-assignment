import React from 'react';

import { deleteUsers } from '../../services/users';
import { Container, Title, BoxForms, BoxInput, Text, AddButton } from './styles';

const DeleteModalUsers = ({ item, users, setUsers, setDeleteModalVisible }) => {

  const handleDelete = async() => {
    try {
      const response = await deleteUsers(users, item);
      setUsers(response)
      setDeleteModalVisible(false)
    } catch (error) {
      console.log('Error', error);
    }
  }

  return (
    <Container>
      <Title>Delete {item.name}?</Title>
      <BoxForms>
        <BoxInput>
          <Text>Are you sure you want to delete {item.name}?</Text>
        </BoxInput>
      </BoxForms>
      <AddButton onClick={handleDelete}>Yes</AddButton>
    </Container>
  )
}

export default DeleteModalUsers;