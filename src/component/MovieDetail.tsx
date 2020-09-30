import React from 'react';
import { ScrollView } from 'react-native';
import { Card, Paragraph, Avatar, Button, Text } from 'react-native-paper';
import { gql, useQuery } from '@apollo/client';

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

const LeftContent = props => <Avatar.Icon {...props} icon="movie-open-outline" />

export default function MovieDetail({ navigation, route }) {

  const { movieId } = route.params;
  console.log(movieId);
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
        <Card.Title title={data.film.title} subtitle={`episode ${data.film.episodeID} / ${data.film.director}`} left={LeftContent} />
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
