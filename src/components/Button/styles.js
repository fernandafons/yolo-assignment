import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  height: 35px;
  width: 35px;
  background-color: ${({ theme, edit }) => edit ? theme.colors.blue : theme.colors.green };
  border: 2px solid ${props => props.theme.colors.green};
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
  color: ${props => props.theme.colors.white };
  font-size: ${props => props.theme.sizes.regular};
`;
