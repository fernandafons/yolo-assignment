import React from 'react';

import { Container, Title, BoxDataText, BoxText, DataText, BoxButtons } from './styles';
import Button from '../Button';

import { BiEditAlt } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';

export default function Card({ item, userDashboard }) {
  // console.log(userDashboard);
  const editButton = () => {
    return (
      <BiEditAlt
        color="white"
        size={20}
      />
    )
  }

  const trashButton = () => {
    return (
      <BsTrash
        color='#32BD50'
        size={20}
      />
    )
  }
  return (
    <Container>
      <BoxText>
        <Title>{item.name}</Title>
        <BoxDataText>
          <DataText>{userDashboard ? item.email : item.category}</DataText>
          <DataText>{userDashboard ? item.address : item.created_at}</DataText>
        </BoxDataText>
      </BoxText>
      <BoxButtons>
        <Button icon={editButton} edit={true}/>
        <Button icon={trashButton}/>
      </BoxButtons>
    </Container>
  )
}
