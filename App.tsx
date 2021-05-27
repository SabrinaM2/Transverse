import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { Auth } from 'aws-amplify';

import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify, {API, graphqlOperation} from 'aws-amplify'
import config from './src/aws-exports'
import awsconfig from './src/aws-exports'
Amplify.configure(config)
Amplify.configure(awsconfig)


function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();



  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);