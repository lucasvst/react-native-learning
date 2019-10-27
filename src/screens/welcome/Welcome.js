import React, { Component } from 'react'
import { Container, Header, Content, Button, Text } from 'native-base'

export default class CNHUploader extends Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <Container>
                <Header />
                <Content>
                    <Button onPress={() => navigate('VoucherScanner')}>
                        <Text>WELCOME!</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}