/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, Button} from 'react-native-elements';
import Moment from 'moment';
import {ScrollView} from 'react-native-gesture-handler';
export default function EpisodiosCard({route, navigation}: any) {
  const {id, nombre, air_date, episode, created} = route.params;

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <Card.Title h3>
          <Text style={{fontFamily: 'Arbutus-Regular', color: 'black'}}>
            {nombre}
          </Text>
        </Card.Title>
        <Card.Divider width={3} color="orangered" />
        <View style={{marginBottom: 10, marginTop: 0}}>
          <Text style={styles.label}>
            Emitido el:{'  '}
            <Text style={{fontWeight: 'bold', color: 'black'}}>{air_date}</Text>
            {'  '}
          </Text>
          <Text style={styles.label}>
            Episodio:{'  '}
            <Text style={{fontWeight: 'bold', color: 'black'}}>{episode}</Text>
          </Text>
          <Text style={styles.label}>
            Creado:{'  '}
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              {' '}
              {Moment(created).format(`DD - MM - yyyy ( hh:mm )`)}
            </Text>
          </Text>
          <Text style={styles.label}>
            Id:
            <Text style={{fontWeight: 'bold', color: 'black'}}> {id}</Text>
          </Text>
        </View>
        <Button
          onPress={() => navigation.goBack()}
          buttonStyle={{
            borderRadius: 10,
            backgroundColor: 'orangered',
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
