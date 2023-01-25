/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {common, fonts, colors} from '../../../static/const';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import FormError from '../../../components/FormError';
// import {post} from '../../../Hooks/HttpRequest';
import {param as ParamType} from '../../../types/Naviagtion';

export default function Form(props: ParamType) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [formValidator, setFormValidator] = useState({
    firstName: false,
    lastName: false,
    email: false,
    number: false,
    password: false,
    confirmPassword: false,
  });
  const {container, section, title, formGroup, formRow} = styles;

  function handleForm(
    item: string,
    stateNm: string,
    stateFn: React.Dispatch<React.SetStateAction<string>>,
  ): void {
    stateFn(item);
    if (stateNm in (formValidator as any)) {
      const newValidator = formValidator as any;
      if (!item.length) {
        newValidator[stateNm] = true;
      } else {
        newValidator[stateNm] = false;
      }

      setFormValidator(newValidator);
    }
  }

  async function handleRegister() {
    // const {data} = await post('register', {
    //   firstName,
    //   lastName,
    //   email,
    //   number,
    //   password,
    //   confirmPassword,
    // });

    // data;

    props.navigation.goBack();
  }

  return (
    <View style={container}>
      <View style={section}>
        <FontAwesomeIcon
          size={fonts.icon}
          style={{marginBottom: '5%', marginLeft: '-1%'}}
          icon="angle-left"
        />
        <Text style={title}>Enter your details</Text>
      </View>
      <View>
        <View>
          <View style={formGroup}>
            <TextInput
              style={{
                borderBottomColor: colors.greyDark,
                borderBottomWidth: 1,
              }}
              placeholder="Firt Name"
              value={firstName}
              onChangeText={e => handleForm(e, 'firstName', setFirstName)}
            />
            <FormError
              field="firstName"
              style={{display: formValidator.firstName ? 'flex' : 'none'}}
            />
          </View>
          <View style={formGroup}>
            <TextInput
              style={{
                borderBottomColor: colors.greyDark,
                borderBottomWidth: 1,
              }}
              placeholder="Last Name"
              value={lastName}
              onChangeText={e => handleForm(e, 'lastName', setLastName)}
            />
            <FormError
              field="lastName"
              style={{display: formValidator.lastName ? 'flex' : 'none'}}
            />
          </View>
          <View style={formGroup}>
            <TextInput
              style={{
                borderBottomColor: colors.greyDark,
                borderBottomWidth: 1,
              }}
              keyboardType="email-address"
              placeholder="Email Address"
              value={email}
              onChangeText={e => handleForm(e, 'email', setEmail)}
            />
            <FormError
              field="email"
              style={{display: formValidator.email ? 'flex' : 'none'}}
            />
          </View>
          <View style={formGroup}>
            <TextInput
              style={{
                borderBottomColor: colors.greyDark,
                borderBottomWidth: 1,
              }}
              keyboardType="phone-pad"
              placeholder="Phone Number"
              value={number}
              onChangeText={e => handleForm(e, 'number', setNumber)}
            />
            <FormError
              field="number"
              style={{display: formValidator.number ? 'flex' : 'none'}}
            />
          </View>
          <View style={{...formRow, position: 'relative'}}>
            <View style={{...formGroup, width: '100%'}}>
              <TextInput
                style={{
                  borderBottomColor: colors.greyDark,
                  borderBottomWidth: 1,
                }}
                placeholder="Password"
                keyboardType="default"
                secureTextEntry={isVisible}
                value={password}
                onChangeText={e => handleForm(e, 'password', setPassword)}
              />
              <FormError
                field="password"
                style={{display: formValidator.password ? 'flex' : 'none'}}
              />
            </View>
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: 0,
                top: '35%',
              }}
              onPress={() => setIsVisible(!isVisible)}>
              <FontAwesomeIcon
                size={fonts.iconMD}
                icon={isVisible ? 'eye' : 'eye-slash'}
              />
            </TouchableOpacity>
          </View>
          <View style={formGroup}>
            <TextInput
              style={{
                borderBottomColor: colors.greyDark,
                borderBottomWidth: 1,
              }}
              placeholder="Confirm Password"
              keyboardType="default"
              secureTextEntry={true}
              value={confirmPassword}
              onChangeText={e =>
                handleForm(e, 'confirmPassword', setConfirmPassword)
              }
            />
            <FormError
              field="confirmPassword"
              style={{display: formValidator.confirmPassword ? 'flex' : 'none'}}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: '10%',
          width: '100%',
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.secondary,
            borderRadius: 6,
            padding: '6%',
          }}
          onPress={() => handleRegister()}>
          <Text
            style={{
              ...common.font,
              textAlign: 'center',
              fontSize: fonts.header,
              color: colors.white,
              fontFamily: 'Ubuntu-Medium',
            }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    backgroundColor: colors.white,
  },
  section: {
    paddingTop: '25%',
    paddingBottom: '10%',
  },
  title: {
    fontSize: fonts.heading,
    fontFamily: 'Ubuntu-Bold',
    color: colors.black,
  },
  formGroup: {
    marginTop: '2%',
    marginBottom: '2%',
  },
  formRow: {
    display: 'flex',
    flexDirection: 'row',
  },
});
