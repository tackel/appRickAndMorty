// packages
import React, {Dispatch, SetStateAction} from 'react';
import {Sms, PasswordCheck} from 'iconsax-react-native';
// styles
import {
  InputWrapper,
  InputText,
  InputContainer,
  Label,
  ErrorMessage,
  IconContainer,
  Button,
} from './style';

//components
//import Icon from '../svg/Icon';

interface IInput {
  name?: string;
  value?: string;
  onChangeText?: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  errorMessage?: string;
  type?: string;
}

export default function Input({
  value,
  onChangeText,
  placeholder,
  onFocus,
  onBlur,
  errorMessage,
  type,
}: IInput) {
  return (
    <>
      <InputWrapper>
        <IconContainer>
          {type === 'mail' ? (
            <Sms size="45" color="#ff8a65" variant="Bulk" />
          ) : (
            <PasswordCheck size="45" color="#ff8a65" variant="Bulk" />
          )}
        </IconContainer>
        <InputContainer>
          <InputText
            value={value}
            onFocus={onFocus}
            onBlur={onBlur}
            onChangeText={onChangeText}
            placeholder={placeholder}
            keyboardType={type === 'mail' ? 'email-address' : 'default'}
            secureTextEntry={type !== 'mail'}
          />
        </InputContainer>
      </InputWrapper>
      <ErrorMessage>{errorMessage ? errorMessage : ''}</ErrorMessage>
    </>
  );
}
