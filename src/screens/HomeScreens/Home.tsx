/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Root, Container, Heading, Image, CourseScroll} from '../../components';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {common} from '../../static/const';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Header from '../../components/Header';
import {param} from '../../types/Naviagtion';

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

export default class Home extends Component {
  render() {
    const ListItem = ({item}: any) => {
      return (
        <TouchableOpacity
          style={{paddingRight: '1%'}}
          onPress={() =>
            (this.props as param).navigation.navigate('CourseList', {
              title: item.text, id: item.key, paymentStatus: 'pay', price: 501
            })
          }>
          <Image
            uri={item.uri}
            width={Dimensions.get('window').width / 2.4}
            height={150}
          />
          <Text>{item.text}</Text>
        </TouchableOpacity>
      );
    };

    const {topHeader} = styles;
    return (
      <Root>
        <Header navigator={(this.props as any).navigation} />
        <Container>
          <View style={topHeader}>
            <View>
              <Heading
                title="Hola, sayef!"
                size={26}
                style={{marginBottom: 8}}
                bold
              />
              <Heading
                title="What do you wanna learn today?"
                size={16}
                color="#70747E"
              />
            </View>

            <Image
              uri="https://reactnative.dev/img/tiny_logo.png"
              width={50}
              height={50}
              rounded
            />
          </View>

          <View style={{marginTop: 50}}>
            <Text>Carousel</Text>
          </View>

          <View style={{marginTop: 50}}>
            <View style={[topHeader, {marginTop: 0}]}>
              <Heading
                title="Video Lectures"
                size={26}
                style={{marginBottom: 8}}
                bold
              />

              <TouchableOpacity onPress={()=>(this.props as param).navigation.navigate('Courses')}>
                <Heading title="see more" size={16} color="#70747E" />
              </TouchableOpacity>
            </View>
            <CourseScroll Child={ListItem} sections={SECTIONS} horizontal />
          </View>
        </Container>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  topHeader: {
    marginTop: '10%',
    ...common.row,
    ...common.center,
    ...common.justifyContentBetween,
  },
});
