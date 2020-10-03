import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, IconButton, Colors } from 'react-native-paper';
import { gql, useQuery } from '@apollo/client';
import { StackScreenProps } from '@react-navigation/stack';
import base64 from 'react-native-base64';

import { fetchAllMovies_allFilms_edges } from './__generated__/fetchAllMovies';
import LinkView from './LinkView';


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
              <LinkView
                key={edge.node.id}
                to={`/movie/${base64.decode(edge.node.id).replace(/^films:/, '')}`}
                style={[styles.row, styles.container]}
              >
                <View style={[styles.item, styles.content]}>
                  <Text style={styles.title}>{edge.node.title}</Text>
                </View>
                <View style={[styles.iconItem, styles.iconMarginRight, styles.marginVerticalNone]}>
                  <IconButton
                    icon="chevron-right"
                    color={Colors.grey500}
                    size={24}
                  />
                </View>
              </LinkView>
            )
          )
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
  },
  description: {
    fontSize: 14,
  },
  marginVerticalNone: { marginVertical: 0 },
  iconMarginLeft: { marginLeft: 0, marginRight: 16 },
  iconMarginRight: { marginRight: 0 },
  item: {
    marginVertical: 6,
    paddingLeft: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  iconItem: {
    margin: 8,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
