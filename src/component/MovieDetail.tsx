import React from 'react';
import { ScrollView } from 'react-native';
import { Card, Paragraph, Avatar, Button, Text } from 'react-native-paper';
import { gql, useQuery } from '@apollo/client';
import { StackScreenProps } from '@react-navigation/stack';
import { Link } from '@react-navigation/native';

import NotFound from './NotFound';

const FETCH_MOVIE = gql`
query fetchMovie($id: ID!){
  film(id: $id) {
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
  Movie: {id: String}
};

export default function MovieDetail({ route }: StackScreenProps<StackParamList, 'Movie'>) {

  const { id } = route.params;
  const { loading, error, data } = useQuery(FETCH_MOVIE, {variables: { id }});

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <NotFound />;
  }

  return (
    <ScrollView>
      <Card style={{margin: 4}}>
        <Card.Title 
          title={data.film.title} 
          subtitle={`episode ${data.film.episodeID} / ${data.film.director}`} 
          left={(props) => <Avatar.Icon {...props} icon='movie-open-outline' />} />
        <Card.Content>
          <Paragraph>{data.film.openingCrawl}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Link to='/'>Back</Link>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}
