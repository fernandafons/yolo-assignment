import React, { useEffect, useState } from "react";
import ReactModal from 'react-modal';
import { DatePicker } from '@mui/x-date-pickers';
import SearchIcon from '@mui/icons-material/Search';

import CardGames from "../../Cards/CardGames";
import AddModalGames from "../../AddModal/AddModalGames";

import {
  Container,
  Header,
  SearchBar,
  BoxCards,
  AddButton,
  AddButtonText,
  BoxFilter,
  Text,
  DateSearch,
  BoxIcon,
} from "../styles";

export default function DashboardGames({ data, setGames }) {
  const [visible, setVisible] = useState(false);
  const [dateFilter, setDateFilter] = useState(false);
  const [startAt, setStartAt] = useState(null);
  const [endAt, setEndAt] = useState(null);
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
      return item['category'].toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredList(updatedList);
  };

  const handleSearchByDate = () => {
    if(!startAt && !endAt){
      return updatedList
    }
    updatedList = data.filter((item) => {
      if (startAt === null) {
        return Date.parse(item.created_at) <= endAt
      }
      if (endAt === null) {
        return Date.parse(item.created_at) >= startAt
      }
      return Date.parse(item.created_at) >= startAt && Date.parse(item.created_at) <= endAt;
    });
    setFilteredList(updatedList);
  }

  const handleHideFilter = () => {
    setDateFilter(false);
    setFilteredList(data);
  }

  useEffect(() => {
    setFilteredList(data)
  }, [data])

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
        <Header>
          <SearchBar 
            placeholder='Search by Category' 
            onChange={(event) => filter(event)}
          />
          <AddButton onClick={openModal} >
            <AddButtonText>+</AddButtonText>
          </AddButton>
        </Header>
        {!dateFilter &&
          <BoxFilter onClick={() => setDateFilter(true)}>
            <Text>Filter by date</Text>
          </BoxFilter>
        }
        {dateFilter &&
        <>
          <DateSearch>
            <DatePicker 
              label='Start'
              value={startAt}
              onChange={(event) => setStartAt(event)} 
            />
            <Text>-</Text>
            <DatePicker 
              label='End'
              value={endAt}
              onChange={(event) => setEndAt(event)} 
              minDate={startAt}
            />
            <BoxIcon onClick={handleSearchByDate}>
              <SearchIcon color="primary"/>
            </BoxIcon>
          </DateSearch>
          <BoxFilter onClick={handleHideFilter}>
            <Text style={{marginTop: '10px'}}>Hide filter</Text>
          </BoxFilter>
        </>
        }
        <BoxCards>
      {filteredList.map((item) => 
      <CardGames key={item.id} item={item} data={data} setGames={setGames} />)}
        </BoxCards>
        <ReactModal isOpen={visible} onRequestClose={closeModal} style={ModalStyles}>
          <AddModalGames 
            setVisible={setVisible} 
            data={data} 
            setGames={setGames} 
          />
        </ReactModal>
      </Container>
  )
}
