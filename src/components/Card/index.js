import React from 'react';

import { Container, Title, BoxDataText, BoxText, DataText, BoxButtons } from './styles';
import Button from '../Button';

import { BiEditAlt } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';

export default function Card({ title }) {
  const editButton = () => {
    return (
      <BiEditAlt
        color='white'
        size={20}
      />
    )
  }

  const trashButton = () => {
    return (
      <BsTrash
        color='white'
        size={20}
      />
    )
  }
  return (
    <Container>
      <BoxText>
        <Title>Name</Title>
        <BoxDataText>
          <DataText>Category</DataText>
          <DataText>Creation Date</DataText>
        </BoxDataText>
      </BoxText>
      <BoxButtons>
        <Button icon={editButton} edit={true}/>
        <Button icon={trashButton}/>
      </BoxButtons>
    </Container>
  )
}
