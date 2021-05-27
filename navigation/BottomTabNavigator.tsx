/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

 import { FontAwesome,FontAwesome5,MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontDisplay } from 'expo-font';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ShoppingListScreen from '../screens/ShoppingListScreen';
import { BottomTabParamList, HomeParamList, ShoppingListParamList, SearchParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ 
        activeTintColor: Colors[colorScheme].tint,
        activeBackgroundColor: Colors[colorScheme].text,
        inactiveTintColor: 'white',
        inactiveBackgroundColor: Colors[colorScheme].text,
        }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,

        }}
      />
      <BottomTab.Screen
        name="ShoppingList"
        component={ShoppingListNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="clipboard-list" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="barcode-scan" size={24} color={color} />,
        }}
      />
      
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.screenTitle
        }
      }}
      >
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ 
          headerTitle: 'MON PROFIL'
        }}
      />
    </HomeStack.Navigator>
  );
}

const ShoppingListStack = createStackNavigator<ShoppingListParamList>();

function ShoppingListNavigator() {
  return (
    <ShoppingListStack.Navigator>
      <ShoppingListStack.Screen
        name="ShoppingListScreen"
        component={ShoppingListScreen}
        options={{ 
          headerTitle: 'MA LISTE DE COURSES', 
          headerStyle: { backgroundColor: Colors.light.screenTitle } 
        }}
      />
    </ShoppingListStack.Navigator>
  );
}

const SearchStack = createStackNavigator<SearchParamList>();

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ 
          headerTitle: 'RECHERCHE',
          headerStyle: { backgroundColor: Colors.light.screenTitle }
        }}
      />
    </SearchStack.Navigator>
  );
}
