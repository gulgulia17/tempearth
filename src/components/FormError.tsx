import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {common, colors, locale} from '../static/const';

interface Props {
  field: string;
  style?: {};
}

export default class FormError extends Component<Props> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text style={[this.props.style, styles.message]}>
          {(locale.errors as any)[this.props.field].required}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  message: {
    ...common.font,
    color: colors.error,
  },
});
