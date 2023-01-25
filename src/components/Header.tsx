/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {param} from '../types/Naviagtion';
import {colors, fonts} from '../static/const';
import Heading from './Heading';

interface Props {
  navigator: any;
  title?: string;
  style?: {};
}

export default class Header extends Component<Props> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
  }
  render() {
    const {navigator, title} = this.props as any;
    const {boxWithShadow, headerItem} = styles;
    return (
      <View style={boxWithShadow}>
        <View style={[headerItem, !navigator ? {display: 'none'} : null]}>
          <TouchableOpacity onPress={() => console.log(navigator.openDrawer())}>
            <FontAwesomeIcon icon="bars" color="#fff" size={fonts.iconMD} />
          </TouchableOpacity>
        </View>
        <View style={[title ? {display: 'flex'} : {display: 'none'}]}>
          <Heading title={title} color='#fff'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxWithShadow: {
    backgroundColor: colors.secondary,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    padding: '2%',
  },
  headerItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    width: '100%',
    height: 30,
  },
});
