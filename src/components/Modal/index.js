import React from 'react';

import { Container, Title, BoxForms, BoxInput, Text, Input, AddButton } from './styles';

const Modal = ({title, userDashboard}) => {
  // make it actually add data
  return (
    <Container>
      <Title>Add {title}</Title>
      <BoxForms>
        <BoxInput>
          <Text>Name: </Text>
          <Input />
        </BoxInput>
        <BoxInput>
          <Text>{userDashboard ? 'Email: ' : 'Category: '}</Text>
          <Input />
        </BoxInput>
        <BoxInput>
          <Text>{userDashboard ? 'Address: ' : 'Created_at: '}</Text>
          <Input />
        </BoxInput>
      </BoxForms>
      <AddButton>Add new {title}</AddButton>
    </Container>
  )
}

export default Modal;