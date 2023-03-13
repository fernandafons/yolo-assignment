import React, { useState } from 'react';
import ReactModal from 'react-modal';

import { Container, Title, BoxDataText, BoxText, DataText, BoxButtons } from '../styles';
import Button from '../../Button';
import EditModalUsers from '../../EditModal/EditModalUsers';
import DeleteModalUsers from '../../DeleteModal/DeleteModalUsers';

import { BiEditAlt } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';

export default function CardUsers({ item, users, setUsers }) {
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
        color='#6d6b5f'
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
      backgroundColor: '#F2F2F2',
    }
  }

  return (
    <Container>
      <BoxText>
        <Title>{item.name}</Title>
        <BoxDataText>
          <DataText>{item.email}</DataText>
          <DataText>{item.address}</DataText>
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
        <EditModalUsers 
          item={item} 
          users={users} 
          setUsers={setUsers} 
          setVisible={setVisible}
        />
      </ReactModal>
      <ReactModal 
        isOpen={deleteModalVisible} 
        onRequestClose={closeDeleteModal} 
        style={ModalStyles}
      >
        <DeleteModalUsers 
          users={users} 
          setUsers={setUsers} 
          item={item} 
          setDeleteModalVisible={setDeleteModalVisible} 
        />
      </ReactModal>
    </Container>
  )
}
