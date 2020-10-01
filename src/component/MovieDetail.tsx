import React from 'react';
import { ScrollView } from 'react-native';
import { Card, Paragraph, Avatar, Button, Text } from 'react-native-paper';
import { gql, useQuery } from '@apollo/client';
import { StackScreenProps } from '@react-navigation/stack';

const FETCH_MOVIE = gql`
query fetchMovie($movieId: ID!){
  film(id: $movieId) {
    title
    episodeID
    openingCrawl
    director
    releaseDate
	}
}
`;

type StackParamList = {
  Home: undefined;
  Movie: {movieId: String}
};

export default function MovieDetail({ route, navigation }: StackScreenProps<StackParamList, 'Movie'>) {

  const { movieId } = route.params;
  const { loading, error, data } = useQuery(FETCH_MOVIE, {variables: { movieId },});

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error :(</Text>;
  }

  return (
    <ScrollView>
      <Card style={{margin: 4}}>
        <Card.Title 
          title={data.film.title} 
          subtitle={`episode ${data.film.episodeID} / ${data.film.director}`} 
          left={(props) => (<Avatar.Icon {...props} icon="movie-open-outline" />)} />
        <Card.Content>
          <Paragraph>{data.film.openingCrawl}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate('Home')}>Back</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}
