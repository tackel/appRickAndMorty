/* eslint-disable prettier/prettier */
import React from 'react';
import {HambergerMenu, Home} from 'iconsax-react-native';

import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';

export default function Header({actionLeft, title, navigation}: any) {
  const hanledLeftAction = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={actionLeft ? actionLeft : hanledLeftAction}>
        <HambergerMenu size="46" color="#2ccce4" variant="Linear" />
      </TouchableOpacity>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View>
        <Image
          source={require('../../../assets/images/rym5.png')}
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            marginTop: 0,
            borderColor: '#2ccce4',
            borderWidth: 2,
          }}
          // PlaceholderContent={}
        />
        {/*<Home size="44" color="#2ccce4" variant="Linear" />*/}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#474645',
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    padding: 14,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: '#2ccce4',
    fontSize: 25,
    fontFamily: 'Arbutus-Regular',
    textTransform: 'uppercase',
  },
});
