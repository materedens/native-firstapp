import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

// Import Screens
// import OnboardingScreen from './screens/OnboardingScreen';
// import SignInScreen from './screens/SignInScreen';
// import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AccountsScreen from './screens/AccountsScreen';
import SettingsScreen from './screens/SettingsScreen';
import SearchScreen from './screens/SearchScreen';
// import SplashScreen from './screens/SplashScreen';

const AppStack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#63c5da' barStyle="light-content" />
      {/* <AppStack.Navigator>
        <AppStack.Screen name='Onboarding' component={OnboardingScreen} />
        <AppStack.Screen name='SignIn' component={SignInScreen} />
        <AppStack.Screen name='SignUp' component={SignUpScreen} />
      </AppStack.Navigator> */}
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
        <Tab.Screen name="Search" component={SearchScreen} options={{
          tabBarLabel: 'Search',
          tabBarColor: '#63c5da',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-search" color={color} size={15} />
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
