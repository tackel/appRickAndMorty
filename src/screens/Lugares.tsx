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
    locations(page: $pagina) {
      info {
        pages
        next
        prev
      }
      results {
        id
        name
        type
        dimension
        created
      }
    }
  }
`;

export default function LocationScreen({navigation}: any) {
  const [pagina, setPagina] = useState(1);
  const {loading, error, data} = useQuery(GET_DATOS, {
    variables: {pagina},
  });

  if (loading) {
    return <ActivityIndicator color="orangered" size="large" />;
  }
  if (error) {
    return <Text>Error loading data</Text>;
  }

  return (
    <Screen>
      <ImageBackground source={require('../../assets/images/rym6.jpg')}>
        <Header
          navigation={navigation}
          actionLeft={() => navigation.openDrawer()}
          title="Lugares"
        />
        <ScrollView>
          <View>
            <Card containerStyle={styles.container}>
              <Card.Title h3>
                <Text
                  style={{
                    fontFamily: 'Arbutus-Regular',
                    color: '#EAFFFD',
                  }}>
                  SELECCIONE UNO
                </Text>
              </Card.Title>

              <Card.Divider width={3} color="cyan" />
              {data.locations.results.map((u: any, i: any) => {
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() =>
                      navigation.navigate('LugaresCard', {
                        id: `${u.id}`,
                        nombre: `${u.name}`,
                        type: `${u.type}`,
                        dimension: `${u.dimension}`,
                        created: `${u.created}`,
                      })
                    }>
                    <View key={i} style={styles.user}>
                      <Text style={styles.text}>
                        {u.id} - {u.name}
                      </Text>
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
                  disabled={!data.locations.info.prev ? true : false}
                  onPress={() => setPagina(data.locations.info.prev)}>
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
                  disabled={!data.locations.info.next ? true : false}
                  onPress={() => setPagina(data.locations.info.next)}>
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
    backgroundColor: 'rgba(108, 173, 96  ,0.5)',
    flex: 1,
    marginBottom: 80,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 30,
    backgroundColor: 'rgba(108, 173, 96  ,1)',
    borderRadius: 20,
    padding: 10,
  },
  text: {
    fontFamily: 'MochiyPopPOne-Regular',
    color: 'black',
    fontSize: 23,
    textAlignVertical: 'center',
    marginTop: 10,
  },
});
