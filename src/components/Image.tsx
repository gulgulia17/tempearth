/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image as ImageRoot, StyleProp, ImageStyle} from 'react-native';

interface Props {
  source?: string | any;
  uri?: string;
  width?: number | string;
  height?: number;
  rounded?: boolean;
  style?: StyleProp<ImageStyle> | undefined;
}

export default class Image extends Component<Props> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
  }

  render() {
    const {uri, width, height, rounded, style} = this.props;

    return (
      <ImageRoot
        source={{uri}}
        style={[
          style,
          width ? {width} : null,
          height ? {height} : null,
          rounded ? {borderRadius: 50} : null,
        ]}
      />
    );
  }
}
