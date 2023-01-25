import React, {Component} from 'react';
import {ScrollView, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle> | undefined;
  children?: any;
}

export default class Container extends Component<Props> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
  }

  render() {
    const {style, children} = this.props;
    const {container} = styles;
    return (
    <ScrollView>
      <View style={[container, style]}>{children}</View>
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
  },
});
