import React from 'react';
import { ScrollView } from 'react-native';
import { Card, Paragraph, Avatar, Button } from 'react-native-paper';

const data = {
  "film": {
    "title": "A New Hope",
    "episodeID": 4,
    "openingCrawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
    "director": "George Lucas",
    "releaseDate": "1977-05-25"
  }
}

const LeftContent = props => <Avatar.Icon {...props} icon="movie-open-outline" />

export default function MovieDetail({ navigation }) {
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
