import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

type GoogleResponse = {
  firstName?: string;
  lastName?: string;
  picture?: string;
  fullName?: string;
  email?: string;
};

function onGoogleButtonPress(): Promise<GoogleResponse> {
  return new Promise(async function (resolve, reject) {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const {additionalUserInfo: user} = await auth().signInWithCredential(
        googleCredential,
      );

      resolve({
        firstName: user?.profile?.family_name,
        lastName: user?.profile?.given_name,
        picture: user?.profile?.picture,
        fullName: user?.profile?.name,
        email: user?.profile?.email,
      });
    } catch (error) {
      reject(error);
    }
  });
}

export async function onLogout() {
  await auth().signOut();
  return GoogleSignin.signOut();
}

export default onGoogleButtonPress;
