import React, { Component } from 'react';
import { Container, Header, Heading, Root } from '../../components';
import { colors } from '../../static/const';

export default class Reader extends Component {
    render(): React.ReactNode {
        return (
            <Root>
                <Header title="Document Reader" navigator={undefined} />
                <Container style={{ paddingHorizontal: '2%', paddingTop: '2%' }}>
                    <Heading title="No Docs available to read" size={15} bold color={colors.secondary} style={{ textAlign: 'center' }} />
                </Container>
            </Root>
        )
    }
}