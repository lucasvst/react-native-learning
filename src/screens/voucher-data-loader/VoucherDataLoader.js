import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Header, Content, Button, Text } from 'native-base'

class VoucherDataLoader extends Component {
    render() {
        const { navigate } = this.props.navigation
        setTimeout(() => navigate('CHNUploader'), 3000)
        return (
            <View style={styles.container}>
                <Container>
                    <Header />
                    <Content>
                        <Text>{this.props.navigation.getParam('transactionId')}</Text>
                    </Content>
                </Container>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
})

export default VoucherDataLoader