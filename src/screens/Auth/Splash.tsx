import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, fonts, locale} from '../../static/const';
import {param as ParamType} from '../../types/Naviagtion';
import {StackActions} from '@react-navigation/native';
import {auth} from '../../services/AuthService';

export default class Splash extends Component {
  componentDidMount() {
    auth.isLoggedIn; //DO NOT REMOVE IT FROM HERE
    setTimeout(() => {
      console.log(auth.isLoggedIn);
      (this.props as ParamType).navigation.dispatch(
        StackActions.replace(auth.isLoggedIn ? 'HomeScreen' : 'AuthScreen', {
          screen: 'Intro',
        }),
      );
    }, 10);
  }

  render() {
    const {container, title} = styles;
    return (
      <View style={container}>
        <Text style={title}>{locale.appName}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: fonts.heading + 35,
    fontFamily: 'Ubuntu-Bold',
    color: colors.white,
  },
});
