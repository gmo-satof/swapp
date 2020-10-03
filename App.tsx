import React from 'react';
import { Provider as PaperProvider,} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink　} from '@apollo/client';
import fetch from 'cross-fetch';
import base64 from 'react-native-base64';

import MovieList from './src/component/MovieList';
import MovieDetail from './src/component/MovieDetail';
import NotFound from './src/component/NotFound';

const Stack = createStackNavigator();

const client = new ApolloClient({
  link: new HttpLink({uri: 'http://localhost:8080', fetch }),
  cache: new InMemoryCache()
});

const linking = {
  prefixes: ['http://localhost:19006', 'swapp://'],
  config: {
    screens: {
      Home: "",
      Movie: {
        path: "movie/:id",
        parse: {
          id: (id: string) => base64.encode(`films:${id}`),
        },
        stringify: {
          id: (id: string) => base64.decode(id).replace(/^films:/, ''),
        },
      },
      NotFound: ":path"
    },
  },
};

export default function App() {
  return (
    <ApolloProvider client={client}>
      <PaperProvider>
        <NavigationContainer linking={linking}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={MovieList} options={{ title: 'Star Wars Movies' }}/>
            <Stack.Screen name="Movie" component={MovieDetail} options={{ title: 'Movie Detail' }}/>
            <Stack.Screen name="NotFound" component={NotFound} options={{ title: 'Star Wars Movies' }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ApolloProvider>
  );
}
