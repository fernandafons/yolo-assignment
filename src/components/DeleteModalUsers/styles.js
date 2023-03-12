import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 300px;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.text`
  font-size: ${props => props.theme.sizes.big};
  color: ${props => props.theme.colors.black};

  text-align: center;
`;

export const BoxForms = styled.div`
`;

export const BoxInput = styled.div`
  display: flex;
  margin-bottom: 15px;
  width: 270px;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.text`
  font-size: ${props => props.theme.sizes.regular};
  color: ${props => props.theme.colors.black};
  text-align: center;
`;

export const DeleteButton = styled.button`
  display: flex;
  height: 40px;
  width: 200px;
  background-color: ${props => props.theme.colors.yellow};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border: none;
  color: ${props => props.theme.colors.black};
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;