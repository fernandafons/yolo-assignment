import React from 'react';

import { Container } from './styles';

export default function Button({ icon, edit, onClick }) {
  return (
    <Container edit={edit} onClick={onClick}>
      {icon()}
    </Container>
    )
}
