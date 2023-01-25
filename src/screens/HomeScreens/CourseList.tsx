import React, { Component } from "react";
import { Alert, Text, FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import { Container, Root, Card, Heading } from "../../components";
import Header from "../../components/Header";
import { post } from "../../Hooks/HttpRequest";
import { param } from "../../types/Naviagtion";
import { common, fonts, colors } from "../../static/const"
import { StackActions } from "@react-navigation/native";
const data = [
  { id: 1, title: 'This is course 1' },
  { id: 2, title: 'This is course 2' },
  { id: 3, title: 'This is course 3' },
]

export default class CourseList extends Component {
  state = {
    refreshing: false,
    status: false,
    subscribed: true,
    coursesCat: [],
    disclaimer: "THIS IS DUMMY DISCLAIMER",
  };


  // async componentDidMount() {
  //   this.setState({
  //     status: true,
  //   });

  //   try {
  //     const data = (await post('getcoursesub', {
  //       "courseid": 1
  //     })).data

  //     if (typeof data.inst !== 'undefined') {
  //       this.setState({ disclaimer: data.inst });
  //     }

  //     if (typeof data.courses !== 'undefined') {
  //       this.setState({ coursesCat: data.courses });
  //     } else if (typeof data.error !== 'undefined') {
  //       Alert.alert('ERROR:', data.error);
  //     }

  //   } catch (error: any) {
  //     this.setState({ status: false });
  //     Alert.alert('ERROR:', error);
  //   }
  // }

  render() {
    const { disclaimer, subscribed } = this.state
    const { navigation, route } = (this.props as param);
    const { title, id, paymentStatus, price } = route.params;
    const { footer, footerTabs, footerTabsTitle } = styles

    const CardList = ({ title }: { title: string }) => {
      return (
        <TouchableOpacity style={styles.cardList} onPress={() => navigation.navigate("CourseTopic", {
          screen: "Videos",
          params: {
            title,
            subscribed,
            courseid: route.params.id,
            subjectid: id,
          },
        })}>
          <Card title={title} />
        </TouchableOpacity>
      )
    }

    return (
      <Root>
        <Header title={title} navigator={undefined} />
        {disclaimer ? <Heading title={disclaimer} size={18} bold color={colors.secondary} style={{ textAlign: 'center' }} /> : null}
        <Container style={{ paddingHorizontal: '2%', paddingTop: '2%' }}>
          <FlatList
            data={data}
            numColumns={2}
            renderItem={({ item }: any) => <CardList key={item.id} title={item.title} />}
          />
        </Container>
        <View style={footer}>
          <View style={[footerTabs, { backgroundColor: "#fff" }]}>
            <Text style={footerTabsTitle}>
              {price ? `₹${price}` : "Free"}
            </Text>
          </View>
          <View style={[footerTabs, { backgroundColor: colors.secondary }]}>
            <TouchableOpacity
              onPress={() =>
                navigation.dispatch(
                  StackActions.replace("Subscription", { courseId: id })
                )
              }
            >
              <Text style={[footerTabsTitle, { color: colors.white }]}>
                {price ? "BUY NOW" : "Subscribe"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  cardList: {
    width: '50%',
    marginRight: '2%',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardListText: {
    ...common.font,
    fontSize: fonts.title
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: "row",
    borderTopColor: "#0003",
    borderTopWidth: 1,
  },
  footerTabs: {
    width: "50%",
    padding: "3%",
  },
  footerTabsTitle: {
    ...common.font,
    textAlign: "center",
    fontSize: 16,
    textTransform: "uppercase",
  }
})