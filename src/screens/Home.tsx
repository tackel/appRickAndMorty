/* eslint-disable prettier/prettier */
import React from 'react';
import {Text} from 'react-native';

import {Header, Screen} from '../components';

export default function HomeScreen({navigation}: any) {
  return (
    <Screen>
      <Header
        navigation={navigation}
        actionLeft={() => navigation.openDrawer()}
        title="Home"
      />
      <Text
        style={{color: 'yellow', fontFamily: 'Arbutus-Regular', fontSize: 44}}>
        Hola HOME
      </Text>
      <Text
        style={{
          color: 'yellow',
          fontFamily: 'MochiyPopPOne-Regular',
          fontSize: 44,
        }}>
        Hola HOME
      </Text>
    </Screen>
  );
}
