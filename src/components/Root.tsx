import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../static/const';

interface Props {
  style?: {};
  children: any;
}

export default class Root extends Component<Props> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
  }

  render() {
    const {style, children} = this.props;
    const {container} = styles;
    return (
      <SafeAreaView style={[container, style]}>
        {children}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '8.1%',
    backgroundColor: colors.white,
  },
});
