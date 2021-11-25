/* eslint-disable prettier/prettier */
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import BottomNavigator from './Button';
import {Logout} from '../screens';
import Datos from '../screens/Datos';
import {Button} from 'react-native-elements';
import {Image, View} from 'react-native';

import {
  Category,
  Icon,
  InfoCircle,
  Information,
  LoginCurve,
} from 'iconsax-react-native';
import {DrawerActions} from '@react-navigation/native';

function CustomDrawerContent(props: any) {
  return (
    <View style={{flex: 1, backgroundColor: 'gray'}}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: 100,
            marginBottom: 40,
            marginTop: 10,
          }}>
          <Image
            source={require('../../assets/images/rym3.png')}
            style={{
              width: 130,
              height: 130,
              borderRadius: 40,
              marginTop: 20,
              borderColor: 'orangered',
              borderWidth: 2,
            }}
            // PlaceholderContent={}
          />
        </View>

        <DrawerItemList {...props} />
        <Button
          buttonStyle={{
            position: 'relative',
            backgroundColor: 'black',
            borderRadius: 40,
            borderColor: 'orangered',
            borderWidth: 2,
            margin: 10,
          }}
          title={'Cerrar Drawer'}
          titleStyle={{
            color: 'orangered',
            fontSize: 20,
            fontFamily: 'Arbutus-Regular',
          }}
          onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
        />
      </DrawerContentScrollView>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerLabelStyle: {
          fontSize: 25,
          lineHeight: 50,
        },
        drawerType: 'back',
        drawerActiveTintColor: 'orangered',
        drawerActiveBackgroundColor: '#3C3C3C',

        drawerStyle: {
          width: '75%',
        },
        headerShown: false,
      }}>
      <Drawer.Screen
        options={{
          drawerIcon: () => <Category size="32" color="orangered" />,
          title: 'Ir a la App',
        }}
        name="ir a la app"
        component={BottomNavigator}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <InfoCircle size="35" color="orangered" variant="Outline" />
          ),
          title: 'Sistema',
        }}
        name="Sistema"
        component={Datos}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <LoginCurve size="35" color="orangered" variant="Outline" />
          ),
          title: 'Logout',
        }}
        name="Logout"
        component={Logout}
      />
    </Drawer.Navigator>
  );
}
