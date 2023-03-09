import React, { useState } from 'react';

import { Container, Title, BoxForms, BoxInput, Text, Input, AddButton } from './styles';

const EditModal = ({item, userDashboard}) => {
  const [newFirstValue, setNewFirstValue] = useState(item.name)
  const [newSecondValue, setNewSecondValue] = useState(userDashboard ? item.email : item.category)
  const [newThirdValue, setNewThirdValue] = useState(userDashboard ? item.address : item.created_at)

  // todo: make it actually update data
  return (
    <Container>
      <Title>Edit {item.name}</Title>
      <BoxForms>
        <BoxInput>
          <Text>Name: </Text>
          <Input 
            value={newFirstValue} 
            onChange={(event) => setNewFirstValue(event.target.value)} 
          />
        </BoxInput>
        <BoxInput>
          <Text>{userDashboard ? 'Email: ' : 'Category: '}</Text>
          <Input 
            value={newSecondValue}
            onChange={(event) => setNewSecondValue(event.target.value)}
          />
        </BoxInput>
        <BoxInput>
          <Text>{userDashboard ? 'Address: ' : 'Created_at: '}</Text>
          <Input 
            value={newThirdValue} 
            onChange={(event) => setNewThirdValue(event.target.value)}
          />
        </BoxInput>
      </BoxForms>
      <AddButton>Edit {item.name}</AddButton>
    </Container>
  )
}

export default EditModal;