import React from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';

const data = {
  "allFilms": {
    "edges": [
      {
        "node": {
          "id": "ZmlsbXM6MQ==",
          "title": "A New Hope"
        }
      },
      {
        "node": {
          "id": "ZmlsbXM6Mg==",
          "title": "The Empire Strikes Back"
        }
      },
      {
        "node": {
          "id": "ZmlsbXM6Mw==",
          "title": "Return of the Jedi"
        }
      },
      {
        "node": {
          "id": "ZmlsbXM6NA==",
          "title": "The Phantom Menace"
        }
      },
      {
        "node": {
          "id": "ZmlsbXM6NQ==",
          "title": "Attack of the Clones"
        }
      },
      {
        "node": {
          "id": "ZmlsbXM6Ng==",
          "title": "Revenge of the Sith"
        }
      }
    ]
  }
};

export default function MovieList({ navigation }) {
  return (
    <ScrollView>
      {data.allFilms.edges.map(
          (edge) => (
              <List.Item
                  key={edge.node.id}
                  title={edge.node.title}
                  onPress={() => navigation.navigate('Movie')}
                  right={props => <List.Icon {...props} icon="chevron-right" />}
              />
          )
      )}
    </ScrollView>
  );
}
