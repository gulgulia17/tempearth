import { StackActions } from "@react-navigation/native";
import React, { Component } from "react";
import { Alert, Text } from "react-native";
import { param } from "../../types/Naviagtion";

export default class Subscription extends Component {

    componentDidMount(): void {
        setTimeout(() => {
            Alert.alert(
                'Success',
                'Thankyou , you have successfully subscribed (DUMMY PAY).',
                [
                    { text: 'Yay!', onPress: () => (this.props as param).navigation.dispatch(StackActions.replace('Home')) },
                ],
                { cancelable: false },
            );
        }, 1000)
    }
    render() {
        return <Text>Thankyou, dummy payment loading.</Text>
    }
}