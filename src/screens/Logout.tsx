/* eslint-disable prettier/prettier */
import {MessageQuestion} from 'iconsax-react-native';
import React, {useContext} from 'react';
import {View} from 'react-native';

import {Button, Card, Text} from 'react-native-elements';

import {Header, Screen} from '../components';
import {Auth} from '../Provider/AuthProvider';
import {supabase} from '../supabase/supabaseCliente';

export default function Logout({navigation}: any) {
  const {handleLogin} = useContext(Auth);

  const handleLogout = async () => {
    try {
      const {error} = await supabase.auth.signOut();
      if (error) throw error;
      alert('User Logged Out');
      handleLogin ? handleLogin() : null;
    } catch (e) {
      alert(e.message);
    }
  };
  return (
    <Screen>
      <Header
        navigation={navigation}
        actionLeft={() => navigation.openDrawer()}
        title="Logout"
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0C6F5F',
        }}>
        <Card.Image
          source={require('../../assets/images/rym4.png')}
          style={{
            width: 322,
            height: 102,
          }}
        />
        <Card containerStyle={{borderRadius: 20, backgroundColor: '#FAEFC8'}}>
          <Text
            style={{
              fontFamily: 'Arbutus-Regular',
              fontSize: 35,
              textAlign: 'center',
            }}>
            ¿ Desea salir de la App ?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Button
              buttonStyle={{
                backgroundColor: 'black',
                borderRadius: 20,
                borderColor: 'green',
                borderWidth: 2,
                margin: 10,
                width: 100,
                height: 100,
              }}
              title={'NO'}
              titleStyle={{
                color: 'green',
                fontSize: 20,
                fontFamily: 'Arbutus-Regular',
              }}
              onPress={() => navigation.openDrawer()}
            />
            <Button
              buttonStyle={{
                backgroundColor: 'black',
                borderRadius: 20,
                borderColor: 'orangered',
                borderWidth: 2,

                margin: 10,
                width: 100,
                height: 100,
              }}
              title={'SI'}
              titleStyle={{
                color: 'orangered',
                fontSize: 20,
                fontFamily: 'Arbutus-Regular',
              }}
              onPress={handleLogout}
            />
          </View>
        </Card>
      </View>
    </Screen>
  );
}
