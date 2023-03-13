import styled from 'styled-components';
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  display: 1;
  flex-direction: column;
  height: 90vh;
  width: 350px;
  background-color: ${props => props.theme.colors.gray };
  justify-content: flex-start;
  align-items: center;
  margin: 0 25px;
  border-top-left-radius: 10px;
  ${media.lessThan('712px')`
    width: 100vw;
  `}
`;

export const Header = styled.div`
  display: flex;
  width: 85%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  margin: 20px 10px;
`;

export const SearchBar = styled.input`
  display: flex;
  height: 40px;
  width: 80%;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.white};
  padding: 0 10px;
  margin-right: 10px;
`;

export const BoxCards =  styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  margin-top: 10px;
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* Hide scrollbar for IE and Edge */
  scrollbar-width: none;  /* Hide scrollbar for Firefox */
`;

export const AddButton = styled.button`
  display: flex;
  height: 40px;
  width: 40px;
  background-color: ${props => props.theme.colors.darkBlue};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border: none;
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const AddButtonText = styled.text`
  color: ${props => props.theme.colors.white };
  font-size: ${props => props.theme.sizes.regular};
`;