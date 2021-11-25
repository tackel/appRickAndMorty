/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LugaresScreen, PersonajesScreen, EpisodiosScreen} from '../screens';
import {Location, Monitor, UserSquare} from 'iconsax-react-native';

const Bottom = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 75,
          borderColor: '#2ccce4',
          borderTopColor: '#2ccce4',
          borderTopWidth: 2,
          borderWidth: 2,
        },

        headerShown: false,
        tabBarInactiveBackgroundColor: '#474645',
        tabBarActiveTintColor: '#2ccce4',
        tabBarActiveBackgroundColor: 'black',

        tabBarLabelStyle: {
          fontSize: 17,
          fontFamily: 'MochiyPopPOne-Regular',
          marginBottom: 4,
          borderRadius: 40,
        },
      }}>
      <Bottom.Screen
        name="Personajes"
        component={PersonajesScreen}
        options={{
          tabBarIcon: () => <UserSquare size="26" color="#2ccce4" />,
        }}
      />
      <Bottom.Screen
        name="Lugares"
        component={LugaresScreen}
        options={{
          tabBarIcon: () => (
            <Location size="26" color="#2ccce4" variant="Outline" />
          ),
        }}
      />
      <Bottom.Screen
        name="Episodios"
        component={EpisodiosScreen}
        options={{
          tabBarIcon: () => (
            <Monitor size="26" color="#2ccce4" variant="Outline" />
          ),
        }}
      />
    </Bottom.Navigator>
  );
}
