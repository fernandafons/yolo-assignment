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

export const HorizontalLine = styled.div`
  display: flex;
  width: 350px;
  border-bottom: 1px solid black;
`;

export const Button = styled.button`
  width: 50%;
  height: 60px;
  background-color: ${props => props.theme.colors.blue};
  border: none;
`;

export const ButtonText = styled.text`
  font-size: ${props => props.theme.sizes.big};
  color: ${props => props.theme.colors.white};
`;