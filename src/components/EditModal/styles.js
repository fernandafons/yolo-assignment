import styled from 'styled-components';
import { DatePicker } from '@mui/x-date-pickers';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 300px;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.text`
  font-size: ${props => props.theme.sizes.big};
  color: ${props => props.theme.colors.black};
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
`;

export const Input = styled.input`
  display: flex;
  width: 160px;
  height: 35px;
  border-radius: 5px;
  border: none;
  color: black;
  width: 150px;
  padding: 0 10px;
  box-shadow: 0 3px 5px 2px rgb(96, 168, 255, .3);
  :focus {
    outline: none;
  }
`;

export const EditButton = styled.button`
  display: flex;
  height: 40px;
  width: 200px;
  background-color: ${props => props.theme.colors.darkBlue};
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

export const DateInput = styled(DatePicker)`
&&{
  display: flex;
  width: 170px;
  height: 35px;
  border-radius: 5px;
  border: none;
}`;