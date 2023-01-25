import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faAngleLeft,
  faArrowLeft,
  faEye,
  faEyeSlash,
  faHouse,
  faHouseUser,
  faBook,
  faBars,
  faUser,
  faFolder,
  faBell,
  faLock,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';

export default async function onAppBootstrap() {
  // Register the device with FCM
  messaging().onMessage(onMessageReceived);
  messaging().setBackgroundMessageHandler(onMessageReceived);
  messaging().subscribeToTopic('updates');

  await messaging().registerDeviceForRemoteMessages();

  // Get the token
  await messaging().getToken();

  // Get Permission
  await getPermission();
  await createChannel();
  await socialLogin();
  generateLibraryFonts();
}

function generateLibraryFonts() {
  library.add(
    faEye,
    faEyeSlash,
    faArrowLeft,
    faAngleLeft,
    faHouse,
    faHouseUser,
    faBook,
    faBars,
    faUser,
    faFolder,
    faBell,
    faLock,
    faVideo,
  );
}

async function socialLogin() {
  GoogleSignin.configure({
    webClientId:
      '20396824079-3k2c0u9ubt0vtr6fieog24p8dbcbuhom.apps.googleusercontent.com',
  });
}

async function createChannel() {
  await notifee.createChannel({
    id: 'updates',
    name: 'Course Updates',
  });
}

async function getPermission() {
  await notifee.requestPermission({
    alert: true,
    criticalAlert: true,
    badge: true,
    sound: true,
  });
}

async function onMessageReceived(
  message: FirebaseMessagingTypes.RemoteMessage | any,
) {
  if (typeof message === 'string') {
    message = JSON.parse(message);
  }

  const {notification, data} = message;
  const {title, body} = notification;

  await notifee.displayNotification({
    title,
    body,
    data,
    android: {
      channelId: 'updates',
    },
  });
}
