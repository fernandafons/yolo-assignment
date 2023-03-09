import React, { useState } from 'react';
import ReactModal from 'react-modal';

import { Container, Title, BoxDataText, BoxText, DataText, BoxButtons } from './styles';
import Button from '../Button';
import EditModal from '../EditModal';
import DeleteModal from '../DeleteModal';

import { BiEditAlt } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';

export default function Card({ item, userDashboard }) {
  // console.log(userDashboard);
  const [visible, setVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const editButton = () => {
    return (
      <BiEditAlt
        color="white"
        size={20}
      />
    )
  }

  const trashButton = () => {
    return (
      <BsTrash
        color='#32BD50'
        size={20}
      />
    )
  }

  const openModal = () => {
    setVisible(true);
  }

  const closeModal = () => {
    setVisible(false);
  }

  const openDeleteModal = () => {
    setDeleteModalVisible(true);
  }

  const closeDeleteModal = () => {
    setDeleteModalVisible(false);
  }

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
      <BoxText>
        <Title>{item.name}</Title>
        <BoxDataText>
          <DataText>{userDashboard ? item.email : item.category}</DataText>
          <DataText>{userDashboard ? item.address : item.created_at}</DataText>
        </BoxDataText>
      </BoxText>
      <BoxButtons>
        <Button icon={editButton} edit={true} onClick={openModal}/>
        <Button icon={trashButton} onClick={openDeleteModal} />
      </BoxButtons>
      <ReactModal 
        isOpen={visible} 
        onRequestClose={closeModal} 
        style={ModalStyles}
      >
        <EditModal item={item} userDashboard={userDashboard}/>
      </ReactModal>
      <ReactModal 
        isOpen={deleteModalVisible} 
        onRequestClose={closeDeleteModal} 
        style={ModalStyles}
      >
        <DeleteModal item={item} userDashboard={userDashboard}/>
      </ReactModal>
    </Container>
  )
}
