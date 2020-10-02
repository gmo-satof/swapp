import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Link } from '@react-navigation/native';

import StatusCodeContext from '../StatusCodeContext';

type StackParamList = {
  Home: undefined;
};

export default function NotFound() {
  const status = React.useContext(StatusCodeContext);

  if (status) {
    status.code = 404;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>404 Not Found</Text>
      <Link to='/' style={styles.link}>
        Go to home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  link: {
    margin: 24,
  },
});
