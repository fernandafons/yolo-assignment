import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  height: 35px;
  width: 35px;
  background-color: ${({ theme, edit }) => edit ? theme.colors.darkBlue : theme.colors.gray };
  border: 2px solid ${props => props.theme.colors.darkBlue};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 5px;
  
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const Title = styled.text`
  color: ${props => props.theme.colors.black };
  font-size: ${props => props.theme.sizes.regular};
`;
