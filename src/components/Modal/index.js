import React from 'react';

import { Container, Title, BoxForms, BoxInput, Text, Input, AddButton } from './styles';

const Modal = ({title}) => {
  return (
    <Container>
      <Title>Add {title}</Title>
      <BoxForms>
        <BoxInput>
          <Text>Name: </Text>
          <Input />
        </BoxInput>
        <BoxInput>
          <Text>Name: </Text>
          <Input />
        </BoxInput>
        <BoxInput>
          <Text>Name: </Text>
          <Input />
        </BoxInput>
      </BoxForms>
      <AddButton>Add new {title}</AddButton>
    </Container>
  )
}

export default Modal;