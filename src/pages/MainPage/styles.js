import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  /* background: linear-gradient(90deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)); */
  background-color: ${props => props.theme.colors.gray};
  align-items: center;
`;

export const BoxLoading = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vw;
  /* background: linear-gradient(90deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)); */
  background-color: ${props => props.theme.colors.gray};
  align-items: center;
  justify-content: center;
`;
