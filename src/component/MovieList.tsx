import React from 'react';
import { ScrollView } from 'react-native';
import { List, Text } from 'react-native-paper';
import { gql, useQuery } from '@apollo/client';
import { StackScreenProps } from '@react-navigation/stack';

import { fetchAllMovies_allFilms_edges } from './__generated__/fetchAllMovies';


const FETCH_ALL_MOVIES = gql`
query fetchAllMovies{
  allFilms {
    edges {
      node {
        id
        title
      }
    }
  }
}
`;

type StackParamList = {
  Home: undefined;
  Movie: {id: String};
};

export default function MovieList({ navigation }: StackScreenProps<StackParamList>) {
  const { loading, error, data } = useQuery(FETCH_ALL_MOVIES);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error :(</Text>;
  }

  return (
    <ScrollView>
      {data.allFilms.edges.map(
          (edge: fetchAllMovies_allFilms_edges) => (
            edge.node && (
              <List.Item
                  key={edge.node.id}
                  title={edge.node.title}
                  onPress={() => navigation.navigate('Movie', {id: edge.node.id})}
                  right={props => <List.Icon {...props} icon="chevron-right" />}
              />
            )
          )
      )}
    </ScrollView>
  );
}
