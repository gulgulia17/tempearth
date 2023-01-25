/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity, Dimensions} from 'react-native';
import React, {Component} from 'react';
import {Container, CourseScroll, Heading, Image, Root} from '../../components';
import {param} from '../../types/Naviagtion';
import Header from '../../components/Header';

const SECTIONS = [
  {
    title: 'Made for you',
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1/200',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/10/200',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1002/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1006/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1008/200',
      },
    ],
  },
  {
    title: 'Punk and hardcore',
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1011/200',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/1012/200',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1013/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1015/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1016/200',
      },
    ],
  },
  {
    title: 'Based on your recent listening',
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1020/200',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/1024/200',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1027/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1035/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1038/200',
      },
    ],
  },
];

export default class Courses extends Component {
  render() {
    const ListItem = ({item}: any) => {
      return (
        <TouchableOpacity
          style={{paddingRight: '5.5%'}}
          onPress={() =>
            (this.props as param).navigation.navigate('Courses', {item})
          }>
          <Image
            uri={item.uri}
            width={Dimensions.get('window').width / 2.4}
            height={150}
            style={{resizeMode: 'stretch'}}
          />
          {/* <Text>
            {item.text} {Dimensions.get('screen').width / 2}
          </Text> */}
        </TouchableOpacity>
      );
    };
    return (
      <Root>
        <Header title="Courses" navigator={undefined} />
        <Container style={{paddingTop: '2%', paddingHorizontal: '3%'}}>
          <CourseScroll Child={ListItem} sections={SECTIONS} multip />
        </Container>
      </Root>
    );
  }
}
