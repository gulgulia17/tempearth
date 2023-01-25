import React, { Component } from 'react';
import { Root, Container, Heading, Header } from '../../components';
import { colors } from '../../static/const';

export default class Home extends Component {
  render() {
    return (
      <Root>
        <Header navigator={(this.props as any).navigation} />
        <Container>
          <Heading title="No Docs available to read" size={15} bold color={colors.secondary} style={{ textAlign: 'center' }} />
        </Container>
      </Root>
    );
  }
}
