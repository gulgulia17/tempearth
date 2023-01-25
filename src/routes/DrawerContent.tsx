/* eslint-disable react-native/no-inline-styles */

import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  Linking,
  Modal,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {param} from '../types/Naviagtion';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export default class DrawerContent extends Component {
  state = {
    fname: 'Null',
    lname: 'Null',
    isSignningOut: false,
    modalVisible: false,
  };

  componentDidMount = async () => {
    const token = await AsyncStorage.getItem('token');
    const userID = await AsyncStorage.getItem('userID');

    let formdata = new FormData();
    formdata.append('id', userID);
    fetch('http://home.gyaano.in/api/getprofiledata', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: formdata,
    })
      .then(response => response.json())
      .then(async responseJson => {
        if (responseJson.success) {
          this.setState({
            fname: responseJson.success.name,
            lname: responseJson.success.lastname,
          });
        }
      })
      .catch(error => {
        Alert.alert('Error', error);
      });
  };

  setModalVisible = (visible: boolean) => {
    this.setState({modalVisible: visible});
  };

  render() {
    const {fname, lname, isSignningOut, modalVisible} = this.state;
    const {navigation} = this.props as param;
    const {
      userInfoSection,
      title,
      font,
      drawerSection,
      bottomDrawerSection,
      center,
      hide,
    } = styles;
    const signOut = async () => {
      this.setState({isSignningOut: true});
      try {
        await AsyncStorage.removeItem('isLoggedIn');
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('userID');
        navigation.dispatch(StackActions.replace('AuthScreen'));
      } catch (e) {
        Alert.alert('Error', 'Please clear app data in settings.');
      } finally {
        this.setState({isSignningOut: false});
      }
    };

    return (
      <View style={{flex: 1}}>
        <DrawerContentScrollView {...this.props}>
          <View>
            <View style={userInfoSection}>
              <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <View
                  style={{
                    borderRadius: 50,
                    backgroundColor: '#0001',
                    width: 50,
                    height: 50,
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{ textAlign: 'center' }}>
                    {fname.charAt(0)} {lname.charAt(0)}
                  </Text>
                </View>
                <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                  <Text style={title}>
                    {fname} {lname}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesomeIcon icon="home" color={color} size={size} />
              )}
              label={() => <Text style={font}>Home</Text>}
              onPress={() => {
                navigation.navigate('HomeTab');
              }}
            />
            </View>
        </DrawerContentScrollView>

        <ActivityIndicator size="large" style={isSignningOut ? center : hide} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    paddingBottom: 20,
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontFamily: 'Montserrat-SemiBold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  font: {
    fontFamily: 'Montserrat-Medium',
  },
  fontBold: {
    fontFamily: 'Montserrat-SemiBold',
  },
  center: {
    position: 'absolute',
    top: '50%',
    left: '70%',
  },
  hide: {
    display: 'none',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
