//pakcages
import React from 'react';

// styles
import {Button, TextButton} from './style';

interface IButtonComponent {
  title: string;
  onPress: () => void;
  color: string;
}

export default function ButtonComponent({
  title,
  onPress,
  color,
}: IButtonComponent) {
  return (
    <Button onPress={onPress}>
      <TextButton style={{color: color}}>{title}</TextButton>
    </Button>
  );
}
