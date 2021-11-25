/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {Card, Button} from 'react-native-elements';

import Moment from 'moment';

export default function LugaresCard({route, navigation}: any) {
  const {id, nombre, type, dimension, created} = route.params;

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <Card.Title h3>
          <Text style={{fontFamily: 'Arbutus-Regular', color: 'black'}}>
            {nombre}
          </Text>
        </Card.Title>
        <Card.Divider width={3} color="orangered" />

        <View style={{marginTop: 10}}>
          <Text style={styles.label}>
            Tipo:{' '}
            <Text style={{fontWeight: 'bold', color: 'black'}}> {type}</Text>
          </Text>
          <Text style={styles.label}>
            Dimension:{'  '}
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              {dimension}
            </Text>
          </Text>
          <Text style={styles.label}>
            Creado:{' '}
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              {' '}
              {Moment(created).format(`DD - MM - yyyy ( hh:mm )`)}
            </Text>
          </Text>
          <Text style={styles.label}>
            Id: <Text style={{fontWeight: 'bold', color: 'black'}}> {id}</Text>{' '}
          </Text>
        </View>

        <Button
          onPress={() => navigation.goBack()}
          buttonStyle={{
            height: 65,

            borderRadius: 10,
            backgroundColor: 'orangered',
            marginTop: 20,
            margin: 10,
          }}
          title="VOLVER AL LISTADO"
          titleStyle={{fontSize: 20, fontFamily: 'Arbutus-Regular'}}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C6F5F',
  },

  card: {
    width: '90%',
    backgroundColor: '#037C35',
    borderRadius: 20,
    borderColor: 'orangered',
    borderWidth: 5,
  },
  label: {
    //lineHeight: 470,
    marginTop: 20,
    textAlign: 'left',
    fontSize: 20,
    fontFamily: 'MochiyPopPOne-Regular',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
