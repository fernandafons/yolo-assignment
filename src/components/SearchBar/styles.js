import styled from 'styled-components';

export const Container = styled.input`
  display: flex;
  height: 30px;
  width: 80%;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.white};
  padding: 5px 10px;
`;