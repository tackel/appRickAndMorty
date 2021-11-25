/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from './Drawer';
import {
  datosScreem,
  EpisodiosCard,
  LoginScreen,
  Logout,
  LugaresCard,
} from '../screens';
import {Auth} from '../Provider/AuthProvider';
import Fotos from '../screens/Fotos';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function StackNavigator() {
  const {isLogged} = React.useContext(Auth);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isLogged ? (
          <>
            <Stack.Screen name="Drawer" component={DrawerNavigator} />
            <Stack.Screen name="Logout" component={Logout} />
            <Stack.Screen name="Fotos" component={Fotos} />
            <Stack.Screen name="EpisodiosCard" component={EpisodiosCard} />
            <Stack.Screen name="LugaresCard" component={LugaresCard} />
          </>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
