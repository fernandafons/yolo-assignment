import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  height: 35px;
  width: 35px;
  background-color: ${({ theme, edit }) => edit ? theme.colors.yellow : theme.colors.gray };
  border: 2px solid ${({ theme, edit }) => edit ? theme.colors.yellow : '#1e1d15' };
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
