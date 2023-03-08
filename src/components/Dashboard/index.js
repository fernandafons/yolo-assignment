import React from "react";

import AddButton from "../AddButton";
import SearchBar from "../SearchBar";
import Card from "../Card";

import {
  Container,
  Header,
  Title,
} from "./styles";

export default function Dashboard({ title }) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <AddButton />
      </Header>
      <SearchBar />
      <Card />
      <Card />
      <Card />
    </Container>
  )
}
