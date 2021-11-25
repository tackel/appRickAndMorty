/* eslint-disable prettier/prettier */
import React from 'react';

import {Bar, SafeArea, ScreenContainer} from './style';

export default function Screen({children}: any) {
  return (
    <SafeArea>
      <Bar backgroundColor="black" barStyle="light-content" />
      <ScreenContainer>{children}</ScreenContainer>
    </SafeArea>
  );
}
