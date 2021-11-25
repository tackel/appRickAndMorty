import 'react-native-gesture-handler';
import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import StackNavigator from './src/navigation/Stack';
import {AuthProvider} from './src/Provider';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </ApolloProvider>
  );
}
