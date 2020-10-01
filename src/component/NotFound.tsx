import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';

type StackParamList = {
  Home: undefined;
};

export default function NotFound({ navigation }: StackScreenProps<StackParamList>) {
  return (
    <View>
      <Text style={styles.title}>404 Not Found</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Home')}
        style={styles.button}
      >
        Go to home
      </Button>
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
  button: {
    margin: 24,
  },
});
