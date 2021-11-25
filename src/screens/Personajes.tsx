import {Card} from 'react-native-elements';

import React, {useState} from 'react';
import {gql, useQuery} from '@apollo/client';
import {Header, Screen} from '../components';
import {
  Text,
  ActivityIndicator,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {Next, Previous} from 'iconsax-react-native';

const GET_DATOS = gql`
  query ($pagina: Int) {
    characters(page: $pagina) {
      info {
        pages
        next
        prev
      }
      results {
        name
        id
        image
        status
        species
        type
        gender
      }
    }
  }
`;

export default function PersonajesScreen({navigation}: any) {
  const [pagina, setPagina] = useState(1);
  const {loading, error, data} = useQuery(GET_DATOS, {
    variables: {pagina},
  });
  if (loading) {
    return <ActivityIndicator color="blue" size="large" />;
  }
  if (error) {
    return <Text>Error loading data</Text>;
  }

  return (
    <Screen>
      <ImageBackground source={require('../../assets/images/rym2.jpg')}>
        <Header
          navigation={navigation}
          actionLeft={() => navigation.openDrawer()}
          title="Personajes"
        />
        <ScrollView>
          <View>
            <Card containerStyle={styles.container}>
              <Card.Title h2>
                <Text
                  style={{
                    fontFamily: 'Arbutus-Regular',
                    color: '#D4FFFB',
                  }}>
                  SELECCIONE UNO
                </Text>
              </Card.Title>

              <Card.Divider width={3} color="cyan" />
              {data.characters.results.map((u: any, i: any) => {
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() =>
                      navigation.navigate('Fotos', {
                        id: `${u.id}`,
                        urlFoto: `${u.image}`,
                        nombre: `${u.name}`,
                        especie: `${u.species}`,
                        status: `${u.status}`,
                        tipo: `${u.type}`,
                        genero: `${u.gender}`,
                      })
                    }>
                    <View key={i} style={styles.user}>
                      <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{uri: u.image}}
                      />
                      <Text style={styles.text}>
                        {u.id} - {u.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
              <Card.Divider width={3} color="#0C6F5F" />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  disabled={!data.characters.info.prev ? true : false}
                  onPress={() => setPagina(data.characters.info.prev)}>
                  <Previous size="46" color="#D4FFFB" variant="Bold" />
                </TouchableOpacity>
                <Card.Title h3>
                  <Text
                    style={{
                      fontFamily: 'Arbutus-Regular',
                      color: '#D4FFFB',
                      textAlignVertical: 'center',
                    }}>
                    PAGINAS
                  </Text>
                </Card.Title>
                <TouchableOpacity
                  disabled={!data.characters.info.next ? true : false}
                  onPress={() => setPagina(data.characters.info.next)}>
                  <Next size="46" color="#D4FFFB" variant="Bold" />
                </TouchableOpacity>
              </View>
            </Card>
          </View>
        </ScrollView>
      </ImageBackground>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    borderColor: '#2ccce4',
    borderWidth: 4,
    borderRadius: 20,
    backgroundColor: 'rgba(215, 118, 32,0.4)',
    flex: 1,
    marginBottom: 80,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 30,
    backgroundColor: 'rgba(215, 118, 32,1)',
    borderRadius: 20,
  },
  image: {
    width: 60,
    height: 80,
    marginRight: 10,
    borderRadius: 20,
  },
  text: {
    fontFamily: 'MochiyPopPOne-Regular',
    color: 'black',
    fontSize: 25,
    textAlignVertical: 'center',
    paddingRight: 60,
  },
});

// implemented without image with header
