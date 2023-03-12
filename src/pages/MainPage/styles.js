import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.colors.white};
  align-items: center;
`;

export const BoxLoading = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.colors.white };
  align-items: center;
  justify-content: center;
`;
