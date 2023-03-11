import React from 'react';

import { Container, Title, BoxForms, BoxInput, Text, AddButton } from './styles';

const EditModal = ({ item }) => {

  // todo: make it actually delete data
  return (
    <Container>
      <Title>Delete {item.name}?</Title>
      <BoxForms>
        <BoxInput>
          <Text>Are you sure you want to delete {item.name}?</Text>
        </BoxInput>
      </BoxForms>
      <AddButton>Yes</AddButton>
    </Container>
  )
}

export default EditModal;