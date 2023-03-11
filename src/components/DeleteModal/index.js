import React from 'react';

import { deleteGames } from '../../services/games';
import { Container, Title, BoxForms, BoxInput, Text, AddButton } from './styles';

const EditModal = ({ item, data, setGames, setDeleteModalVisible }) => {

  const handleDelete = async() => {
    try {
      const response = await deleteGames(data, item);
      console.log('response', response);
      setGames(response)
      setDeleteModalVisible(false)
    } catch (error) {
      
    }
  }
  // todo: make it actually delete data
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

export default EditModal;