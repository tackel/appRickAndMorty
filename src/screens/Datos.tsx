import React from 'react';

import {
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import {Card} from 'react-native-elements';
import RNGestureHandlerButton from 'react-native-gesture-handler/lib/typescript/components/GestureHandlerButton';
import {Header, Screen} from '../components';

export default function datosScreem({navigation}: any) {
  return (
    <Screen>
      <ImageBackground
        style={{height: '100%'}}
        source={require('../../assets/images/rym7.jpeg')}>
        <Header
          navigation={navigation}
          actionLeft={() => navigation.openDrawer()}
          title="Datos"
        />
        <ScrollView>
          <Card containerStyle={styles.container2}>
            <Card.Title h2>
              <Text style={{color: 'black', fontFamily: 'Arbutus-Regular'}}>
                Datos del Sistema
              </Text>
            </Card.Title>
            <Card.Divider width={5} insetType="middle" color="cyan" />
            <Card.Title style={styles.text1}>
              Dispositivo: {Platform.OS.toUpperCase()}
            </Card.Title>

            {Platform.OS === 'android' && (
              <>
                <Card.Title style={styles.text1}>
                  Marca: {JSON.stringify(Platform.constants.Brand)}
                </Card.Title>

                <Card.Title style={styles.text1}>
                  Version: {JSON.stringify(Platform.constants.Version)}
                </Card.Title>

                <Card.Title style={styles.text1}>
                  Numero de Serie: {JSON.stringify(Platform.constants.Serial)}
                </Card.Title>

                <Card.Title style={styles.text1}>
                  Tipo de Ui: {JSON.stringify(Platform.constants.uiMode)}
                </Card.Title>

                <Card.Title style={styles.text1}>
                  Modelo: {JSON.stringify(Platform.constants.Model)}
                </Card.Title>

                <Card.Title style={styles.text1}>
                  Fabricante: {JSON.stringify(Platform.constants.Manufacturer)}
                </Card.Title>
              </>
            )}

            {Platform.OS === 'ios' && (
              <>
                <Card.Title h3 style={styles.text1}>
                  3D Touch:{' '}
                </Card.Title>
                <Card.Title h4 style={styles.text2}>
                  {JSON.stringify(Platform.constants.forceTouchAvailable)}
                </Card.Title>
                <Card.Title h3 style={styles.text1}>
                  Interface:{' '}
                </Card.Title>
                <Card.Title h4 style={styles.text2}>
                  {JSON.stringify(Platform.constants.interfaceIdiom)}
                </Card.Title>
                <Card.Title h3 style={styles.text1}>
                  Version:{' '}
                </Card.Title>
                <Card.Title h4 style={styles.text2}>
                  {JSON.stringify(Platform.constants.osVersion)}
                </Card.Title>
                <Card.Title h3 style={styles.text1}>
                  Nombre del sitema: :{' '}
                </Card.Title>
                <Card.Title h4 style={styles.text2}>
                  {JSON.stringify(Platform.constants.systemName)}
                </Card.Title>
              </>
            )}
          </Card>
        </ScrollView>
      </ImageBackground>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container2: {
    borderColor: '#2ccce4',
    borderWidth: 5,
    borderRadius: 40,
    backgroundColor: 'rgba(86, 143, 76,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontSize: 24,
    color: 'black',
    fontFamily: 'MochiyPopPOne-Regular',
    fontWeight: '600',
    textAlign: 'left',
    padding: 4,
    marginBottom: 8,
  },
  text2: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'MochiyPopPOne-Regular',
    fontWeight: '300',
    textAlign: 'right',
    padding: 4,
    marginBottom: 8,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 20,
    marginTop: 5,
  },
});
