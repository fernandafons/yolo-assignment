import React from 'react';
import { BiEditAlt } from 'react-icons/bi';

import { Container, Title } from './styles';

export default function Button({ icon, edit }) {
  return (
    <Container>
      {icon()}
    </Container>
    )
}
