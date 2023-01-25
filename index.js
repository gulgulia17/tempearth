/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import onAppBootstrap from './src/Hooks/notificationHook';
import 'react-native-gesture-handler';

onAppBootstrap();
AppRegistry.registerComponent(appName, () => App);
