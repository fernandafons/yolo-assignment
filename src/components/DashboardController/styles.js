import styled from 'styled-components';
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  width: 350px;
  background: transparent;
  ${media.lessThan('712px')`
    width: 100vw;
  `}
`;

export const GamesButton = styled.button`
  width: 50%;
  height: 60px;
  border: none;
  border-top-left-radius: ${({ isSelected}) => isSelected ? '10px' : '0'};
  border-top-right-radius: ${({ isSelected}) => isSelected ? '10px' : '0'};
  border-bottom-right-radius: ${({ isSelected}) => isSelected ? '0' : '15px'};
  background: ${({ isSelected}) => isSelected ? `${props => props.theme.colors.gray}` : 'transparent'};
`;

export const UsersButton = styled.button`
  width: 50%;
  height: 60px;
  border: none;
  border-top-left-radius: ${({ isSelected}) => isSelected ? '10px' : '0'};
  border-top-right-radius: ${({ isSelected}) => isSelected ? '10px' : '0'};
  border-bottom-left-radius: ${({ isSelected}) => isSelected ? '0' : '15px'};
  background: ${({ isSelected}) => isSelected ? `${props => props.theme.colors.gray}` : 'transparent'};
`;

export const ButtonText = styled.text`
  font-size: ${props => props.theme.sizes.big};
  color: ${props => props.theme.colors.black};
  font-weight: ${({ isSelected }) => isSelected ? 'bold' : 'normal'};
  font-family: 'Roboto', sans-serif;
`;
