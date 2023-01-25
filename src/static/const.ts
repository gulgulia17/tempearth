import {StyleSheet} from 'react-native';

export const locale = {
  appName: 'The Earth',
  errors: {
    firstName: {
      required: 'First Name field is required.',
    },
    lastName: {
      required: 'Last Name field is required.',
    },
    email: {
      required: 'Email field is required.',
    },
    number: {
      required: 'Number field is required.',
    },
    password: {
      required: 'Password field is required.',
    },
    confirmPassword: {
      required: 'Confirm Password field is required.',
    },
  },
};

export const colors = {
  primary: '#002279',
  secondary: '#1f2e8d',
  black: '#000000',
  white: '#ffffff',
  grey: '#EDEEF0',
  greyDark: '#CFD1D4',
  error: '#F04438',
};

export const fonts = {
  heading: 25,
  title: 20,
  header: 15,
  icon: 25,
  iconMD: 20,
  iconSM: 15,
};

export const common = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  font: {
    color: colors.black,
    fontFamily: 'Ubuntu-Regular',
  },
  justifyContentBetween: {
    justifyContent: 'space-between',
  },
});
