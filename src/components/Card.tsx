import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, common } from "../static/const";
import Heading from "./Heading";



interface Props {
    title: string;
    subtitle?: string;
    style?: {};
}

export default class Card extends Component<Props> {
    constructor(props: Props | Readonly<Props>) {
        super(props);
    }
    render() {
        const { title, subtitle, style } = this.props
        return (
            <View style={[styles.card, styles.shadowProp]}>
                <Heading title={title} style={styles.heading} size={20} />
                {subtitle ? <Heading title={subtitle} style={styles.heading} /> : null}
            </View>

        )
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: '15%',
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5
    },
    heading: {
        ...common.font,
        color: colors.black,
    },
});