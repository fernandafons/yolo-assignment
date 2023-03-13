import React, { useState } from 'react';
import { CircularProgress } from "@mui/material";

import { deleteUsers } from '../../../services/users';
import { Container, Title, BoxForms, BoxInput, Text, DeleteButton } from '../styles';

const DeleteModalUsers = ({ item, users, setUsers, setDeleteModalVisible }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async() => {
    setLoading(true);
    try {
      const response = await deleteUsers(users, item);
      setUsers(response)
      setDeleteModalVisible(false)
    } catch (error) {
      console.log('Error', error);
    }
    setLoading(false);
  }

  return (
    <Container>
      <Title>Delete {item.name}?</Title>
      <BoxForms>
        <BoxInput>
          <Text>Are you sure you want to delete {item.name}?</Text>
        </BoxInput>
      </BoxForms>
      <DeleteButton onClick={handleDelete}>
        {!loading && 'Yes'}
        {loading && <CircularProgress size={20}/>}
      </DeleteButton>
    </Container>
  )
}

export default DeleteModalUsers;