import React from "react";

import AddButton from "../AddButton";
import SearchBar from "../SearchBar";
import Card from "../Card";

import {
  Container,
  Header,
  Title,
  BoxCards,
} from "./styles";

export default function Dashboard({ title, data }) {
  console.log(data)
  let userDashboard = false;
  if (title === 'Users') {
    userDashboard = true;
  }
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <AddButton />
      </Header>
      <SearchBar />
      <BoxCards>
          {data.map((item) => 
          <Card key={item.key} item={item} userDashboard={userDashboard} />)}
      </BoxCards>
    </Container>
  )
}
