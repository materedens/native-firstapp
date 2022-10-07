import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
// Import Screens

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AccountsScreen from './screens/AccountsScreen';
import SettingsScreen from './screens/SettingsScreen';
import SplashScreen from './screens/SplashScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#63c5da',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarColor: '#63c5da',
          title: 'Overview',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={15} />
          ),
        }} />
        <Tab.Screen name="Details" component={DetailsScreen} options={{
          tabBarLabel: 'Details',
          tabBarColor: '#63c5da',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={15} />
          ),
        }} />
        <Tab.Screen name="Accounts" component={AccountsScreen} options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#63c5da',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={15} />
          ),
        }} />
        <Tab.Screen name="SettingsScreen" component={SettingsScreen} options={{
          tabBarLabel: 'Setting',
          tabBarColor: '#63c5da',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-settings" color={color} size={15} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
