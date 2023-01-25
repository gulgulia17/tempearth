import AsyncStorage from '@react-native-async-storage/async-storage';
import {param} from '../types/Naviagtion';
import {StackActions} from '@react-navigation/native';

class AuthService {
  public isLoggedIn: boolean = false;
  constructor() {
    this.init();
  }

  private async init() {
    this.isLoggedIn = !!(await AsyncStorage.getItem('isLoggedIn'));
  }

  async afterAuth(data: any, {navigation}: param) {
    await AsyncStorage.setItem('isLoggedIn', '1');
    await AsyncStorage.setItem('token', data.token);
    await AsyncStorage.setItem('userID', `${data.userid}`);

    navigation.dispatch(StackActions.replace('HomeScreen'));

    return {
      isLoggedIn: true,
      token: data.token,
      userID: data.userid,
    };
  }
}

export const auth = new AuthService();
