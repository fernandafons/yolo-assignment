import React, { useEffect, useState } from "react";
import ReactModal from 'react-modal';
import { DatePicker } from '@mui/x-date-pickers';
import SearchIcon from '@mui/icons-material/Search';

import SearchBar from "../SearchBar";
import CardGames from "../CardGames";
import AddModal from "../AddModal";

import {
  Container,
  Header,
  BoxCards,
  AddButton,
  AddButtonText,
  BoxFilter,
  Text,
  DateSearch,
  BoxIcon,
} from "./styles";

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
      return item['name'].toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredList(updatedList);
  };

  const handleSearch = () => {
    console.log('data', data);
    // console.log('endAt', endAt);
    updatedList = data.filter((item) => {
      console.log('endAt', Date.parse(item.created_at) > startAt);
      return Date.parse(item.created_at) >= startAt && Date.parse(item.created_at) <= endAt;
    });
    console.log('jesus', updatedList)
    setFilteredList(updatedList);
  }

  const handleHideFilter = () => {
    setDateFilter(false);
    setFilteredList(data);
  }

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
  // todo: ver se transforma o header em um componente
  console.log('dateFilter', dateFilter)
  return (
      <Container>
        <Header>
          <SearchBar filter={filter}/>
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
              label='Start date'
              value={startAt}
              onChange={(event) => setStartAt(event)} 
            />
            <Text>-</Text>
            <DatePicker 
              label='End date'
              value={endAt}
              onChange={(event) => setEndAt(event)} 
            />
            <BoxIcon onClick={handleSearch}>
              <SearchIcon />
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
          <AddModal 
            setVisible={setVisible} 
            data={data} 
            setGames={setGames} 
          />
        </ReactModal>
      </Container>
  )
}
