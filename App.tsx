import React from 'react';
import { Provider as PaperProvider,} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink　} from '@apollo/client';
import fetch from 'cross-fetch';

import MovieList from './src/component/MovieList';
import MovieDetail from './src/component/MovieDetail';

const Stack = createStackNavigator();

const client = new ApolloClient({
  link: new HttpLink({uri: 'http://localhost:8080', fetch }),
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={MovieList} options={{ title: 'Star Wars Movies' }}/>
            <Stack.Screen name="Movie" component={MovieDetail} options={{ title: 'Movie Detail' }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ApolloProvider>
  );
}
