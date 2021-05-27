/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ImageBackground, ColorSchemeName, SnapshotViewIOSBase } from 'react-native';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';

import { Image, View } from 'react-native';


import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import styles from '../components/Product/styles';
import style from './style';
import Colors from '../constants/Colors';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator 
      screenOptions={{ 
        headerStyle: {
          backgroundColor: Colors.light.tint
        }
      }}>

      <Stack.Screen 
        name="Root" 
        component={BottomTabNavigator} 
        options={{
          cardStyle:{backgroundColor: '#ffb357'},
          header: () => (
              <ImageBackground 
                style={style.logo}
                source={require('../assets/images/Logo_Applic_Assiette.png')}
              />
          )
        }}
        
      />

      <Stack.Screen 
        name="NotFound" 
        component={NotFoundScreen} 
        options={{ title: 'Oops!' }} 
      />

    </Stack.Navigator>
  );
}
