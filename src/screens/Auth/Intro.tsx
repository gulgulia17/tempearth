/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts, common} from '../../static/const';
import {param} from '../../types/Naviagtion';

export default class Intro extends Component {
  state = {
    email: 'gulgulia17@gmail.com',
    passowrd: '12345678',
  };

  changeRoute(route: string) {
    const {navigation} = this.props as param;
    navigation.navigate(route);
  }

  render() {
    const {container, section, title} = styles;
    return (
      <View style={container}>
        <View style={section}>
          <Image
            source={require('../../../assets/images/intro.png')}
            style={{width: 220, height: 220}}
          />
        </View>
        <View style={section}>
          <Text style={title}>It’s not just learning,</Text>
          <Text style={title}>It’s a promise!</Text>
          <View style={[{marginTop: '5%', marginBottom: '10%'}, common.center]}>
            <Text
              style={{
                ...title,
                fontFamily: 'Ubuntu-Regular',
                fontSize: 18,
                color: colors.greyDark,
                textAlign: 'center',
              }}>
              Impeet viverra vivamus porttior ules ac vulte lectus velit sen
              lectus ue
            </Text>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={{
              backgroundColor: colors.secondary,
              borderRadius: 6,
              padding: '6%',
            }}
            onPress={() => this.changeRoute('Register')}>
            <Text
              style={{
                ...common.font,
                textAlign: 'center',
                fontSize: fonts.header,
                color: colors.white,
                fontFamily: 'Ubuntu-Medium',
              }}>
              Register
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 6,
              padding: '6%',
              borderWidth: 1,
              borderColor: colors.greyDark,
              marginTop: '5%',
            }}
            onPress={() => this.changeRoute('Login')}>
            <Text
              style={{
                ...common.font,
                textAlign: 'center',
                fontSize: fonts.header,
                color: colors.secondary,
                fontFamily: 'Ubuntu-Medium',
              }}>
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    backgroundColor: colors.white,
  },
  section: {
    ...common.center,
    paddingTop: '25%',
  },
  title: {
    fontSize: fonts.heading + 10,
    fontFamily: 'Ubuntu-Bold',
    color: colors.black,
  },
});
