import React from 'react';
import { Provider as PaperProvider,} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MovieList from './src/component/MovieList';
import MovieDetail from './src/component/MovieDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={MovieList} options={{ title: 'Star Wars Movies' }}/>
          <Stack.Screen name="Movie" component={MovieDetail} options={{ title: 'Movie Detail' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
