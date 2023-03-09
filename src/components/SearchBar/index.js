import React from 'react';

import { Container } from './styles';

export default function SearchBar({ filter }) {
  return <Container placeholder='Search here' onChange={filter}/>;
}
