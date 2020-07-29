import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const ContainerProducts = styled.View`
  margin: 0 10px;
`;
export const BoxProduct = styled.View`
  height: 320px;
  width: 100%;
  flex-direction: column;
  border-radius: 5px;
  background-color: #fff;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.18);
  margin: 4px;

  elevation: 4;

  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.18;
  shadow-radius: 6px; */
`;
export const Image = styled.Image`
  width: 100%;
  height: 210px;
  resize-mode: contain;
`;

export const QuantityAdd = styled.View`
  position: absolute;
  right: -10px;
  align-items: center;
  top: -31px;
  background: #ff2929;
  width: 100%;
  height: 100%;
  border-radius: 100px;
`;
export const QuantityAddText = styled.Text`
  color: #fff;
  font: bold 15px/26px 'Roboto';
`;

export const BoxBottom = styled.View`
  margin: 12px;
  flex-direction: column;
`;
export const BoxBottomBrand = styled.Text`
  font: 500 12px/15px 'Poppins';
  font-style: normal;
  color: #7154b8;
`;
export const BoxBottomDescription = styled.Text`
  margin-top: 8px;
  font: 500 14px/18px 'Poppins';
  font-style: normal;

  color: #4b4a5a;
`;

export const BoxBottomPrice = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const BoxBottomPriceText = styled.Text`
  font: bold 16px/24px 'Roboto';
`;
