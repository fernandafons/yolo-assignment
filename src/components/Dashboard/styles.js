import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  display: 1;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background-color: ${props => props.theme.colors.blue };
  justify-content: flex-start;
  align-items: center;
  margin: 0 25px;
  border-radius: 10px;
`;
export const Header = styled.div`
  display: flex;
  width: 85%;
  height: 50px;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-end;
  margin: 20px 10px;
`;
export const Title = styled.text`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.sizes.big};
  font-weight: bold;
`;
