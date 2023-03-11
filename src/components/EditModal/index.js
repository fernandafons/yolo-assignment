import React, { useState, useContext } from 'react';

import { Container, Title, BoxForms, BoxInput, Text, Input, AddButton } from './styles';

import { UserDashboardContext } from "../../hooks/Context/Dashboard";
import { editGames } from '../../services/games';

const EditModal = ({ item, data, setGames, setVisible }) => {
  const userDashboard = useContext(UserDashboardContext);

  const [newName, setNewName] = useState(item.name)
  const [newCategory, setNewCategory] = useState(userDashboard ? item.email : item.category)
  const [newCreatedAt, setNewCreatedAt] = useState(userDashboard ? item.address : item.created_at)

  const handleEdit = async() => {
    try {
      if (!userDashboard) {
        const newValue = {
          id: item.id,
          name: newName,
          category: newCategory,
          created_at: newCreatedAt,
        }
        console.log('item', item);
        const response = await editGames(data, newValue);
        console.log('response', response);
        setGames(response)
        setVisible(false)
      }
    } catch (error) {
      
    }
  }
  

  // todo: make it actually update data
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
          <Text>{userDashboard ? 'Email: ' : 'Category: '}</Text>
          <Input 
            value={newCategory}
            onChange={(event) => setNewCategory(event.target.value)}
          />
        </BoxInput>
        <BoxInput>
          <Text>{userDashboard ? 'Address: ' : 'Created_at: '}</Text>
          <Input 
            value={newCreatedAt} 
            onChange={(event) => setNewCreatedAt(event.target.value)}
          />
        </BoxInput>
      </BoxForms>
      {/* botar loading */}
      <AddButton onClick={() => handleEdit()}>Edit {item.name}</AddButton>
    </Container>
  )
}

export default EditModal;