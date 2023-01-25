import React, { Component } from 'react';
import Home from '../screens/HomeScreens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Docs from '../screens/HomeScreens/Docs';
import { Text } from 'react-native';

export default class TabNavigator extends Component {
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;

            if (route.name === 'HomeTab') {
              iconName = focused ? 'house' : 'house';
            } else if (route.name === 'Docs') {
              iconName = focused ? 'book' : 'book';
            }
            return <FontAwesomeIcon icon={iconName} color={color} size={size}/>;
          },
        })}>
        <Tab.Screen name="HomeTab" component={Home} options={{ title: 'Home' }} />
        <Tab.Screen name="Docs" component={Docs} />
      </Tab.Navigator>
    );
  }
}
