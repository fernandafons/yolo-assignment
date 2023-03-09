import React, {useState} from "react";
import ReactModal from 'react-modal';

import SearchBar from "../SearchBar";
import Card from "../Card";
import Modal from "../Modal";

import {
  Container,
  Header,
  Title,
  BoxCards,
  AddButton,
  AddButtonText,
} from "./styles";

export default function Dashboard({ title, data }) {
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  }

  const closeModal = () => {
    setVisible(false);
  }
  let userDashboard = false;
  if (title === 'Users') {
    userDashboard = true;
  }

  const ModalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    }
  }

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <AddButton onClick={() => openModal()}>
          <AddButtonText>+</AddButtonText>
        </AddButton>
      </Header>
      <SearchBar />
      <BoxCards>
          {data.map((item) => 
          <Card key={item.key} item={item} userDashboard={userDashboard} />)}
      </BoxCards>
      <ReactModal isOpen={visible} onRequestClose={closeModal} style={ModalStyles}>
        <Modal title={title}/>
      </ReactModal>
    </Container>
  )
}
