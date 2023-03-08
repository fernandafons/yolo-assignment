import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.colors.darkBlue };
  justify-content: center;
  align-items: center;
`;

export const Title = styled.text`
  color: ${props => props.theme.colors.white};
`;