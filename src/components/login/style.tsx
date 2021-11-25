import styled from 'styled-components/native';

const InputWrapper = styled.View<{focused?: string}>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const IconContainer = styled.View<{focused?: string}>`
  background: black;
  width: 20%;
  align-items: center;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border: 5px solid orangered;
  height: 55px;
`;

const InputContainer = styled.View<{focused?: string}>`
  width: 80%;
  background: #feffca;
  align-items: center;

  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  border: 3px solid orangered;
`;

const InputText = styled.TextInput<{focused?: string}>`
  width: 100%;
  font-family: 'Arbutus-Regular';
  font-size: 20px;
`;

const Label = styled.Text`
  font-weight: 700;
  font-family: 'Arbutus-Regular';
  font-size: 25px;
  text-transform: capitalize;
  margin-bottom: 10px;
  padding: 10px;
`;

const TextButton = styled.Text`
  font-weight: 700;
  font-family: 'Arbutus-Regular';
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
`;

const Button = styled.TouchableOpacity`
  background-color: black;
  border: 3px solid orangered;
  padding: 5px 10px;
  border-radius: 40px;
`;

const ScreenImage = styled.ImageBackground`
  flex: 1;
`;
const ScreenBottom = styled.View`
  position: absolute;
  bottom: 0%;
  padding: 10px;
  background-color: #c4fff8;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

const ErrorMessage = styled.Text`
  color: red;
  font-weight: 100;
  font-family: 'SourceSansPro-Black';
  font-size: 18px;
  text-transform: capitalize;
  margin-top: 5px;
  margin-bottom: 20px;
`;
export {
  InputContainer,
  Label,
  InputText,
  Button,
  TextButton,
  IconContainer,
  InputWrapper,
  ScreenImage,
  ScreenBottom,
  ErrorMessage,
};
