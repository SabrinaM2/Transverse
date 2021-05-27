import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { listProducts } from '../src/graphql/queries';

import { API, graphqlOperation } from 'aws-amplify';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BIENVENUE SUR APPLIC'ASSIETTE !</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title2}>L'application qui facilitera votre quotidien en repérant les allergènes dans vos produits alimentaires !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  title2: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff7b08'
  },
});
