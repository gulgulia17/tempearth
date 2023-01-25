/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, common} from '../../../static/const';
import {param} from '../../../types/Naviagtion';
import onGoogleButtonPress from '../../../Hooks/SignIn';
import {post} from '../../../Hooks/HttpRequest';
import {auth} from '../../../services/AuthService';

export default class Register extends Component {
  signupWithGoogle = async () => {
    try {
      const data = await onGoogleButtonPress();

      const response = (
        await post('register', {
          name: data.fullName,
          firstname: data.firstName,
          lastname: data.lastName,
          email: data.email,
          picture: data.picture,
          isSocial: true,
        })
      ).data;

      auth.afterAuth(response.success, this.props as param);

      console.log(JSON.stringify(response));
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.data);
      }
      console.log(error);
    }
  };

  render() {
    const {container, section, title, buttonGoogle, buttonTextGoogle} = styles;
    const {navigation} = this.props as param;

    return (
      <View style={container}>
        <View>
          <View style={section}>
            <Text style={title}>Welcome!</Text>
            <Text style={title}>Sign up to continue!</Text>
          </View>
          <TouchableOpacity
            style={buttonGoogle}
            onPress={() => this.signupWithGoogle()}>
            <Image
              style={{
                width: 25,
                height: 25,
                paddingRight: '2%',
              }}
              source={require('../../../../assets/images/google.png')}
            />
            <Text style={buttonTextGoogle}>Sign Up with Google</Text>
          </TouchableOpacity>
        </View>
        <View style={[{marginTop: '5%', marginBottom: '5%'}, common.center]}>
          <Text style={[{fontSize: fonts.title}, common.font]}>or</Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              ...buttonGoogle,
              justifyContent: 'center',
              paddingLeft: 0,
              paddingRight: '5%',
            }}
            onPress={() => navigation.navigate('RegisterForm')}>
            <Text style={buttonTextGoogle}>Sign Up with email</Text>
          </TouchableOpacity>
          <View style={{padding: '7%'}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: fonts.heading - 5,
                fontFamily: 'Ubuntu-Regular',
                color: '#404653',
              }}>
              By signing up you are agreed with our friendly terms and
              condition.
            </Text>
          </View>
          <View style={{marginTop: '15%'}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: fonts.heading - 5,
                fontFamily: 'Ubuntu-Regular',
                color: colors.black,
              }}>
              Already have an account?
            </Text>
            <TouchableOpacity
              style={{marginTop: '5%'}}
              onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: fonts.heading - 5,
                  fontFamily: 'Ubuntu-Bold',
                  color: colors.secondary,
                }}>
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
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
    paddingBottom: '25%',
  },
  title: {
    fontSize: fonts.heading + 10,
    fontFamily: 'Ubuntu-Bold',
    color: colors.black,
  },
  buttonGoogle: {
    ...common.center,
    ...common.row,
    justifyContent: 'space-between',
    backgroundColor: colors.grey,
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingLeft: '10%',
    paddingRight: '30%',
    borderRadius: 6,
  },
  buttonTextGoogle: {
    fontSize: fonts.heading - 5,
    fontFamily: 'Ubuntu-Bold',
    color: colors.black,
  },
});
