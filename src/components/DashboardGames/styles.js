import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  display: 1;
  flex-direction: column;
  height: 90vh;
  width: 350px;
  background-color: ${props => props.theme.colors.blue };
  justify-content: flex-start;
  align-items: center;
  margin: 0 25px;
  border-top-right-radius: 10px;
`;
export const Header = styled.div`
  display: flex;
  width: 85%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  margin: 20px 10px;
`;

export const BoxCards =  styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  margin-top: 10px;

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* Hide scrollbar for IE and Edge */
  scrollbar-width: none;  /* Hide scrollbar for Firefox */
`;

export const AddButton = styled.button`
  display: flex;
  height: 40px;
  width: 40px;
  background-color: ${props => props.theme.colors.red};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border: none;
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const AddButtonText = styled.text`
  color: ${props => props.theme.colors.white };
  font-size: ${props => props.theme.sizes.regular};
`;

export const BoxFilter = styled.div`
  display: flex;
  width: 85%;
  justify-content: flex-end;
  
`;

export const DateSearch = styled.div`
  display: flex;
  width: 85%;
  justify-content: flex-end;
  
`;

export const BoxIcon = styled.button`
  display: flex;
  width: 100px;
  height: 55px;
  justify-content: center;
  align-items: center;
  background: none;
  border-radius: 10px;
  border: none;
  background-color: ${props => props.theme.colors.darkBlue};
  margin-left: 10px;
`;

export const Text = styled.button`
  color: ${props => props.theme.colors.white };
  font-size: ${props => props.theme.sizes.regular};
  background: none;
  border: none;
  /* text-decoration: underline; */
`;