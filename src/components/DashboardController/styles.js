import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* flex: 1; */
  width: 350px;
  background: linear-gradient(180deg, #FFFFFF, #F2F2F2);
  `;

export const VerticalLine = styled.div`
  display: flex;
  height: 60px;
  border-right: 1px solid black;
  `;

export const GamesButton = styled.button`
  width: 50%;
  height: 60px;
  border: none;
  border-top-left-radius: ${({ isSelected}) => isSelected ? '10px' : '0'};
  border-top-right-radius: ${({ isSelected}) => isSelected ? '10px' : '0'};
  border-bottom-right-radius: ${({ isSelected}) => isSelected ? '0' : '15px'};
  background: ${({ isSelected}) => isSelected ? 'linear-gradient(180deg, #8a92cd, #cfd5e5, #F2F2F2)' : '#FFFFFF'};
`;

export const UsersButton = styled.button`
  width: 50%;
  height: 60px;
  border: none;
  border-top-left-radius: ${({ isSelected}) => isSelected ? '10px' : '0'};
  border-top-right-radius: ${({ isSelected}) => isSelected ? '10px' : '0'};
  border-bottom-left-radius: ${({ isSelected}) => isSelected ? '0' : '15px'};
  background: ${({ isSelected}) => isSelected ? 'linear-gradient(180deg, #8a92cd, #cfd5e5, #F2F2F2)' : '#FFFFFF'};
`;

export const ButtonText = styled.text`
  font-size: ${props => props.theme.sizes.big};
  color: ${props => props.theme.colors.black};
  font-weight: ${({ isSelected }) => isSelected ? 'bold' : 'normal'};
  font-family: 'Roboto', sans-serif;
`;
