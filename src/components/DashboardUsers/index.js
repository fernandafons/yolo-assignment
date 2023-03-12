import React, { useEffect, useState } from "react";
import ReactModal from 'react-modal';

import SearchBar from "../SearchBar";
import CardUsers from "../CardUsers";
import AddModalUsers from "../AddModalUsers";

import {
  Container,
  Header,
  BoxCards,
  AddButton,
  AddButtonText,
} from "./styles";

export default function DashboardUsers({ title, setUsers, userDashboard, users }) {
  const [visible, setVisible] = useState(false);
  const [filteredList, setFilteredList] = useState(users);
  let updatedList = [...users];
  
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
    setFilteredList(users)
  }, [users])
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
    <CardUsers key={item.id} item={item} users={users} setUsers={setUsers}/>)}
      </BoxCards>
      <ReactModal isOpen={visible} onRequestClose={closeModal} style={ModalStyles}>
        <AddModalUsers setVisible={setVisible} users={users} setUsers={setUsers}/>
      </ReactModal>
    </Container>
  )
}
