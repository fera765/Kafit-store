import styled, { css } from 'styled-components/native';

interface isFocusedProps {
  isFocused?: boolean;
}

export const Container = styled.View`
  height: 70px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-top-color: #ddd;
`;
export const NavigationButtons = styled.View`
  height: 70px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const BoxActive = styled.TouchableOpacity<isFocusedProps>`
  padding: 10px;
  ${props =>
    props.isFocused &&
    css`
      background: #e1e1e1;
      width: 110px;
      border-radius: 18px;
      padding: 5px 10px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `}
`;
export const BoxActiveText = styled.Text<isFocusedProps>`
  display: ${props => (props.isFocused ? 'flex' : 'none')};
  padding: 10px;
  color: #444;
  font-weight: bold;
`;

export const BoxCartQuantity = styled.View<isFocusedProps>`
  position: absolute;
  border-radius: 100px;
  right: -15px;
  top: -5px;
  padding: 3px;
  width: 100%;
  height: 100%;
  z-index: 900;
  background: #ff6961;

  ${props =>
    props.isFocused &&
    css`
      position: relative;
      display: none;
    `}
`;
export const BoxCartQuantityText = styled.Text`
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export const ImageBoxButton = styled.TouchableOpacity<isFocusedProps>`
  padding: 10px;
  ${props =>
    props.isFocused &&
    css`
      background: #e1e1e1;
      width: auto;
      height: 60px;
      border-radius: 18px;
      padding: 5px 10px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `}
`;
export const ImageBox = styled.View`
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 100px;
`;
export const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 200px;
`;
export const BoxActiveUserText = styled.Text<isFocusedProps>`
  display: ${props => (props.isFocused ? 'flex' : 'none')};
  padding: 10px;
  color: #444;
  font: bold 14px/ 8px 'Roboto';
`;
