import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* flex: 1; */
  width: 350px;
  background: linear-gradient(180deg, #1D2766, #243189);
  `;

export const VerticalLine = styled.div`
  display: flex;
  height: 60px;
  border-right: 1px solid black;
  `;

export const GamesButton = styled.button`
  width: 50%;
  height: 60px;
  background-color: ${props => props.theme.colors.blue};
  border: none;
  border-top-left-radius: ${({ isSelected}) => isSelected ? '10px' : '0'};
  border-top-right-radius: ${({ isSelected}) => isSelected ? '10px' : '0'};
  border-bottom-right-radius: ${({ isSelected}) => isSelected ? '0' : '15px'};
  background: ${({ isSelected}) => isSelected ? 'linear-gradient(180deg, #8a92cd, #243189)' : '#1D2766'};
`;

export const UsersButton = styled.button`
  width: 50%;
  height: 60px;
  background-color: ${props => props.theme.colors.blue};
  border: none;
  border-top-left-radius: ${({ isSelected}) => isSelected ? '10px' : '0'};
  border-top-right-radius: ${({ isSelected}) => isSelected ? '10px' : '0'};
  border-bottom-left-radius: ${({ isSelected}) => isSelected ? '0' : '15px'};
  background: ${({ isSelected}) => isSelected ? 'linear-gradient(180deg, #8a92cd, #243189)' : '#1D2766'};
`;

export const ButtonText = styled.text`
  font-size: ${props => props.theme.sizes.big};
  color: ${props => props.theme.colors.white};
  font-weight: ${({ isSelected }) => isSelected ? 'bold' : 'normal'};
  font-family: 'Roboto', sans-serif;
`;
