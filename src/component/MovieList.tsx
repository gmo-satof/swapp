import React from 'react';
import { ScrollView } from 'react-native';
import { List, Text } from 'react-native-paper';
import { gql, useQuery } from '@apollo/client';

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

export default function MovieList({ navigation }) {
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
          (edge) => (
              <List.Item
                  key={edge.node.id}
                  title={edge.node.title}
                  onPress={() => navigation.navigate('Movie', {movieId: edge.node.id})}
                  right={props => <List.Icon {...props} icon="chevron-right" />}
              />
          )
      )}
    </ScrollView>
  );
}
