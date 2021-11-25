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
    episodes(page: $pagina) {
      info {
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
        created
      }
    }
  }
`;

export default function EpisodiosScreen({navigation}: any) {
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
      <ImageBackground source={require('../../assets/images/rym3.png')}>
        <Header
          navigation={navigation}
          actionLeft={() => navigation.openDrawer()}
          title="Episodios"
        />
        <ScrollView>
          <View>
            <Card containerStyle={styles.container}>
              <Card.Title h3>
                <Text
                  style={{
                    fontFamily: 'Arbutus-Regular',
                    color: 'white',
                  }}>
                  SELECCIONE UNO
                </Text>
              </Card.Title>

              <Card.Divider width={3} color="cyan" />
              {data.episodes.results.map((u: any, i: any) => {
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() =>
                      navigation.navigate('EpisodiosCard', {
                        id: `${u.id}`,
                        nombre: `${u.name}`,
                        air_date: `${u.air_date}`,
                        episode: `${u.episode}`,
                        created: `${u.created}`,
                      })
                    }>
                    <View key={i} style={styles.user}>
                      <Text style={styles.text}>
                        {u.id} - {u.name}
                      </Text>
                      <Card.Divider />
                    </View>
                  </TouchableOpacity>
                );
              })}
              <Card.Divider width={3} color="cyan" />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  disabled={!data.episodes.info.prev ? true : false}
                  onPress={() => setPagina(data.episodes.info.prev)}>
                  <Previous size="44" color="white" variant="Bold" />
                </TouchableOpacity>
                <Card.Title h3>
                  <Text
                    style={{
                      fontFamily: 'Arbutus-Regular',
                      color: 'white',
                      textAlignVertical: 'center',
                    }}>
                    PAGINAS
                  </Text>
                </Card.Title>
                <TouchableOpacity
                  disabled={!data.episodes.info.next ? true : false}
                  onPress={() => setPagina(data.episodes.info.next)}>
                  <Next size="44" color="white" variant="Bold" />
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
    backgroundColor: 'rgba(135, 95, 165  ,0.6)',
    flex: 1,
    marginBottom: 80,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 30,
    backgroundColor: 'rgba(135, 95, 165  ,1)',
    padding: 10,
    borderRadius: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  text: {
    fontFamily: 'MochiyPopPOne-Regular',
    color: 'black',
    fontSize: 23,
    textAlignVertical: 'center',
    marginTop: 10,
  },
});
