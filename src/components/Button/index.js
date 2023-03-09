import React from 'react';

import { Container } from './styles';

export default function Button({ icon, edit }) {
  return (
    <Container edit={edit}>
      {icon()}
    </Container>
    )
}
