import React, { Component } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Container, Header, Content, Text, Image, View, Button } from 'native-base'
import Carousel from 'react-native-snap-carousel'

import NavigationService from './../../NavigationService'

export default class CNHUploader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            carouselItems: [
                {
                    content: "Seu carro está a poucos passos de você!"
                },
                {
                    content: "Economize tempo e reduza a burocracia na compra!"
                },
                {
                    content: "Escaneie o voucher",
                    button: {
                        label: "Vamos lá!",
                        target: "VoucherScan"
                    }
                }
            ]
        }
    }

    _renderItem({ item, index }) {
        const button = item.button ? (
            <Button onPress={() => NavigationService.navigate('VoucherScanner')}>
                <Text>{item.button.label}</Text>
            </Button>
        ) : null
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.item} >{item.content}</Text>
                {button}
            </View>
        )
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <Container style={styles.carousel}>
                <SafeAreaView>
                    <Carousel
                        data={this.state.carouselItems}
                        sliderWidth={250}
                        itemWidth={250}
                        renderItem={this._renderItem}
                    />
                </SafeAreaView>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    carousel: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        textAlign: 'center',
        color: '#000'
    }
})