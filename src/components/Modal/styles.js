import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 300px;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.text`
  font-size: ${props => props.theme.sizes.big}
`;

export const BoxForms = styled.div`
`;

export const BoxInput = styled.div`
  margin-bottom: 15px;
`;

export const Text = styled.text`
  
`;

export const Input = styled.input`
  
`;

export const AddButton = styled.button`
  display: flex;
  height: 40px;
  width: 200px;
  background-color: ${props => props.theme.colors.red};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border: none;
  color: ${props => props.theme.colors.white};
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;