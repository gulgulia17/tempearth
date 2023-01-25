import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import Intro from '../screens/Auth/Intro';
import Login from '../screens/Auth/Login';
import Splash from '../screens/Auth/Splash';
import Register from '../screens/Auth/register/Register';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import { StatusBar } from 'react-native';
import Form from '../screens/Auth/register/Form';
import DrawerNavigator from './DrawerNavigator';
import Courses from '../screens/HomeScreens/Courses';
import { colors } from '../static/const';
import CourseList from '../screens/HomeScreens/CourseList';
import EBook from '../screens/HomeScreens/EBook';
import Docviwer from '../screens/HomeScreens/Docviwer';
import Subscription from '../screens/Payments/Subscription';
import CourseListTabs from './TabScreens/CourseListTabs'
const Stack = createNativeStackNavigator();

const AuthScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="RegisterForm" component={Form} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

const HomeScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={DrawerNavigator} />
      <Stack.Screen name="Courses" component={Courses} />
      <Stack.Screen name="CourseList" component={CourseList} />
      <Stack.Screen
        name="CourseTopic"
        options={{ title: 'Topic' }}
        children={CourseListTabs}
      />
      <Stack.Screen name="EBook" component={EBook} />
      <Stack.Screen name="Docviwer" component={Docviwer} />

      <Stack.Screen name="Subscription" component={Subscription} />
    </Stack.Navigator>
  );
};

export default function StackNavigator() {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <StatusBar
        translucent={true}
        barStyle="light-content"
        backgroundColor={colors.secondary}
      />
      <Stack.Navigator
        initialRouteName="AuthScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={AuthScreen} />
        <Stack.Screen name="AuthScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
