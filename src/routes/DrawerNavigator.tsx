import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import TabNavigator from './TabNavigator';

export default class DrawerNavigator extends Component {
  render() {
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: '#e91e63',
        }}
        initialRouteName="Tabs"
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Tabs" component={TabNavigator} />
      </Drawer.Navigator>
    );
  }
}
