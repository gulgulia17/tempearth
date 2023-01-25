/* eslint-disable react-native/no-inline-styles */
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, common} from '../../static/const';
import {param} from '../../types/Naviagtion';
import onGoogleButtonPress from '../../Hooks/SignIn';
import {post} from '../../Hooks/HttpRequest';
import {auth} from '../../services/AuthService';

export default class Login extends Component {
  state = {
    email: 'gulgulia17@gmail.com',
    passowrd: '12345678',
  };

  loginWithGoogle = async () => {
    try {
      const data = await onGoogleButtonPress();
      this.login({...data, is_social: true});
    } catch (error: any) {
      Alert.alert('ERROR', error.message);
    }
  };

  login = async (formData?: any) => {
    try {
      const response = await post('login', formData || this.state);
      if (response.data?.success) {
        console.log(
          await auth.afterAuth(response.data?.success, this.props as param),
        );
      }
    } catch (error: any) {
      if (error.response.data) {
        const {title, error: message} = error.response.data;
        Alert.alert(title, message || error.response.data?.message);
      }
    }
  };

  render() {
    const {
      container,
      section,
      title,
      buttonGoogle,
      buttonTextGoogle,
      formGroup,
    } = styles;

    const {navigation} = this.props as param;
    return (
      <View style={container}>
        <View>
          <View style={section}>
            <Text style={title}>Welcome back!</Text>
            <Text style={title}>Sign in to continue!</Text>
          </View>
          <TouchableOpacity
            style={buttonGoogle}
            onPress={() => this.loginWithGoogle()}>
            <Image
              style={{
                width: 25,
                height: 25,
                paddingRight: '2%',
              }}
              source={require('../../../assets/images/google.png')}
            />
            <Text style={buttonTextGoogle}>Log in with Google</Text>
          </TouchableOpacity>
        </View>
        <View style={[{marginTop: '5%', marginBottom: '3%'}, common.center]}>
          <Text style={[{fontSize: fonts.title}, common.font]}>or</Text>
        </View>
        <View>
          <View>
            <View style={formGroup}>
              <TextInput
                style={{
                  borderBottomColor: colors.greyDark,
                  borderBottomWidth: 1,
                }}
                placeholder="email address"
                value={this.state.email}
              />
            </View>
            <View style={formGroup}>
              <TextInput
                style={{
                  borderBottomColor: colors.greyDark,
                  borderBottomWidth: 1,
                }}
                placeholder="password"
                keyboardType="default"
                secureTextEntry={true}
                value={this.state.passowrd}
              />
            </View>
          </View>
          <View style={{marginTop: '15%'}}>
            <TouchableOpacity
              style={{
                backgroundColor: colors.secondary,
                borderRadius: 6,
                padding: '6%',
              }}
              onPress={() => this.login()}>
              <Text
                style={{
                  ...common.font,
                  textAlign: 'center',
                  fontSize: fonts.header,
                  color: colors.white,
                  fontFamily: 'Ubuntu-Medium',
                }}>
                Log in
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{borderRadius: 6, padding: '6%'}}
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text
                style={{
                  ...common.font,
                  textAlign: 'center',
                  fontSize: fonts.header,
                  color: colors.secondary,
                  fontFamily: 'Ubuntu-Medium',
                }}>
                Forgot password
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
  formGroup: {
    marginTop: '2%',
    marginBottom: '2%',
  },
});
