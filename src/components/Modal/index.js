import React, { useContext } from 'react';

import { Container, Title, BoxForms, BoxInput, Text, Input, AddButton } from './styles';
import { UserDashboardContext } from "../../hooks/Context/Dashboard";

const Modal = ({title}) => {
  // make it actually add data
  const userDashboard = useContext(UserDashboardContext);
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