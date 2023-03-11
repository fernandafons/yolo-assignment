import React, { useEffect, useState } from "react";
import ReactModal from 'react-modal';

import SearchBar from "../SearchBar";
import Card from "../CardGames";
import Modal from "../Modal";

import {
  Container,
  Header,
  Title,
  BoxCards,
  AddButton,
  AddButtonText,
} from "./styles";

export default function DashboardUsers({ title, data, setGames, userDashboard }) {
  const [visible, setVisible] = useState(false);
  const [filteredList, setFilteredList] = useState(data);
  let updatedList = [...data];
  
  const openModal = () => {
    setVisible(true);
  }

  const closeModal = () => {
    setVisible(false);
  }
  
  const filter = (event) => {
    const query = event.target.value;
    updatedList = updatedList.filter((item) => {
      return item['name'].toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredList(updatedList);
  };
  
  useEffect(() => {
    setFilteredList(data)
  }, [data])
  // todo: treat case in which user change dashboard with data in the input area.

  const ModalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      background: 'linear-gradient(180deg, #1D2766, #727fda)',
    }
  }

  return (
    <Container>
      <Header>
        <SearchBar filter={filter}/>
        <AddButton onClick={() => openModal()}>
          <AddButtonText>+</AddButtonText>
        </AddButton>
      </Header>
      <BoxCards>
    {filteredList.map((item) => 
    <Card key={item.key} item={item} data={data} setGames={setGames}/>)}
      </BoxCards>
      <ReactModal isOpen={visible} onRequestClose={closeModal} style={ModalStyles}>
        <Modal title={title} userDashboard={userDashboard}/>
      </ReactModal>
    </Container>
  )
}
