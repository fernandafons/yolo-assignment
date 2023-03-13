import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  height: 40px;
  width: 40px;
  background-color: ${({ theme, edit }) => edit ? theme.colors.blue : theme.colors.gray };
  border: 2px solid ${({ theme, edit }) => edit ? theme.colors.blue : '#6d6b5f' };
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 5px;
  box-shadow: 0 3px 5px 0px rgb(109, 107, 95, .8);
  
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const Title = styled.text`
  color: ${props => props.theme.colors.black };
  font-size: ${props => props.theme.sizes.regular};
`;
