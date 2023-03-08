import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 110px;
  width: 80%;
  border-bottom: 1px solid black;
  justify-content: space-between
`;

export const Title = styled.text`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.sizes.regular};
  font-weight: bold;
  margin: 10px 0px;
`;

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
`;

export const BoxDataText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0px 20px;
`;

export const DataText = styled.text`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.sizes.small};
  margin-bottom: 5px;
  `;

export const BoxButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  /* background-color: green; */
  margin-top: 10px;
`;
