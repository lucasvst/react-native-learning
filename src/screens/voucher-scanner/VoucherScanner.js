import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Header, Content, Button, Text } from 'native-base'
import { RNCamera } from 'react-native-camera'

import NavigationService from './../../NavigationService'

class VoucherScanner extends Component {
    render() {
        const { navigate } = this.props.navigation
        setTimeout(() => navigate('CHNUploader'), 3000)
        return (
            <View style={styles.container}>
                {/* <Container>
                    <Header />
                    <Content>
                        <Button onPress={() => navigate('CNHUploader')}>
                            <Text>SCAN VOUCHER</Text>
                        </Button>
                    </Content>
                </Container> */}
                <RNCamera
                    ref={ref => { this.camera = ref }}
                    style={styles.preview}
                    onBarCodeRead={this.onBarCodeRead}
                    captureAudio={false}
                />
            </View>
        )
    }

    onBarCodeRead = (barcode) => {
        this.setState({ barcodes: [barcode] })
        NavigationService.navigate('VoucherDataLoader', { transactionId: barcode.data })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    preview: {
        flex: 1,
        width: '100%',
    }
})

export default VoucherScanner