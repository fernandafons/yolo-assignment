import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-bottom: 1px solid #3b3c3c;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px;
`;

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const Title = styled.text`
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.sizes.regular};
  font-weight: bold;
  margin: 10px 0px;
`;

export const BoxDataText = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  justify-content: space-around;
  height: 100%;
`;

export const DataText = styled.text`
  color: ${props => props.theme.colors.lightBlack};
  font-size: ${props => props.theme.sizes.small};
  margin-bottom: 5px;
  `;

export const BoxButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 100%;
  justify-content: center;
`;
