import React, { Component } from 'react';
import { Container, Header, Heading, Root } from '../../components';
import { colors } from '../../static/const';

export default class Topic extends Component {
    render(): React.ReactNode {
        return (
            <Root>
                <Header title="Course Topics" navigator={undefined} />
                <Container style={{ paddingHorizontal: '2%', paddingTop: '2%' }}>
                    <Heading title="No Topics available to watch" size={15} bold color={colors.secondary} style={{ textAlign: 'center' }} />
                </Container>
            </Root>
        )
    }
}