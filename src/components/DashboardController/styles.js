import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* flex: 1; */
  width: 350px;
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
  background: ${({ isSelected}) => isSelected ? 'linear-gradient(180deg, #3444b2, #243189)' : '#243189'};
`;

export const UsersButton = styled.button`
  width: 50%;
  height: 60px;
  background-color: ${props => props.theme.colors.blue};
  border: none;
  background: ${({ isSelected}) => isSelected ? 'linear-gradient(180deg, #3444b2, #243189)' : '#243189'};
`;

export const ButtonText = styled.text`
  font-size: ${props => props.theme.sizes.big};
  color: ${props => props.theme.colors.white};
  font-weight: ${({ isSelected }) => isSelected ? 'bold' : 'normal'};
`;
