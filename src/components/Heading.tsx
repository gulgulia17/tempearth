/* eslint-disable react-native/no-inline-styles */
import {Text, StyleSheet, StyleProp, TextStyle} from 'react-native';
import React, {Component} from 'react';
import {common, fonts} from '../static/const';

interface Props {
  title: string;
  size?: number;
  color?: string;
  bold?: boolean;
  style?: StyleProp<TextStyle> | undefined;
}

export default class Heading extends Component<Props> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
  }

  render() {
    const {title, size, color, style, bold} = this.props;
    const {heading} = styles;
    return (
      <Text
        style={[
          style,
          heading,
          {fontSize: size || fonts.heading},
          color ? {color} : null,
          bold ? {fontFamily: 'Ubuntu-Bold'} : null,
        ]}>
        {title}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    ...common.font,
  },
});
