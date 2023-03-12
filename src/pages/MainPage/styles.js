import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.colors.darkBlue };
  /* background: ${props => 'linear-gradient(180deg, #1D2766, #60A8ff, #ffffff)'}; */
  /* justify-content: center; */
  align-items: center;
`;
