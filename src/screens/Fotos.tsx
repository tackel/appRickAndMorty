/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, Image} from 'react-native-elements';

import CardFlip from 'react-native-card-flip';

export default function FotosScreen({route, navigation}: any) {
  const {urlFoto, nombre, especie, id, status, genero, tipo} = route.params;

  const flipcard = useRef();

  return (
    <View style={styles.container}>
      <CardFlip style={styles.cardContainer} ref={flipcard} flipZoom={0.3}>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.card]}
          onPress={() => flipcard.current.flip()}>
          <Image
            style={{
              padding: 0,
              height: '100%',
              width: '100%',
              borderRadius: 20,
            }}
            source={{
              uri: urlFoto,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.card, styles.card2]}
          onPress={() => flipcard.current.flip()}>
          <View style={{marginTop: 5}}>
            <Text style={styles.label}>
              Nombre:
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                {nombre}
              </Text>
            </Text>

            <Text style={styles.label}>
              Especie:
              <Text style={{fontWeight: 'bold', color: 'black'}}>
                {especie}
              </Text>
            </Text>
            <Text style={styles.label}>
              Genero:{' '}
              <Text style={{fontWeight: 'bold', color: 'black'}}>
                {' '}
                {genero}
              </Text>
            </Text>
            <Text style={styles.label}>
              Estatus:{' '}
              <Text style={{fontWeight: 'bold', color: 'black'}}>
                {' '}
                {status}
              </Text>
            </Text>
            <Text style={styles.label}>
              Tipo:{' '}
              <Text style={{fontWeight: 'bold', color: 'black'}}> {tipo}</Text>
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
              marginTop: 20,
              margin: 10,
            }}
            title="VOLVER AL LISTADO"
            titleStyle={{fontSize: 20, fontFamily: 'Arbutus-Regular'}}
          />
        </TouchableOpacity>
      </CardFlip>
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
  cardContainer: {
    width: '90%',
    height: 470,
  },
  card: {
    width: '100%',
    borderRadius: 20,
    borderColor: 'orangered',
    borderWidth: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  card2: {
    backgroundColor: '#037C35',
  },
  label: {
    marginTop: 10,
    marginLeft: 10,
    textAlign: 'left',
    fontSize: 25,
    fontFamily: 'MochiyPopPOne-Regular',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
