import React, { useState } from 'react';
import ReactModal from 'react-modal';

import { Container, Title, BoxDataText, BoxText, DataText, BoxButtons } from './styles';
import Button from '../Button';
import EditModal from '../EditModal';
import DeleteModal from '../DeleteModal';

import { BiEditAlt } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';

export default function CardGames({ item, data, setGames }) {
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
        color='#1e1d15'
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
      background: 'linear-gradient(90deg, #999999, #bcbcbc)',
    }
  }
  
  const date = new Date(item.created_at)
  const formatedDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();

  return (
    <Container>
      <BoxText>
        <Title>{item.name}</Title>
        <BoxDataText>
          <DataText>{item.category}</DataText>
          <DataText>{formatedDate}</DataText>
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
        <EditModal item={item} data={data} setGames={setGames} setVisible={setVisible}/>
      </ReactModal>
      <ReactModal 
        isOpen={deleteModalVisible} 
        onRequestClose={closeDeleteModal} 
        style={ModalStyles}
      >
        <DeleteModal data={data} setGames={setGames} item={item} setDeleteModalVisible={setDeleteModalVisible} />
      </ReactModal>
    </Container>
  )
}
