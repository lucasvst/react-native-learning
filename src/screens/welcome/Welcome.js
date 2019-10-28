import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, Dimensions, Image } from 'react-native'
import { Container, Header, Content, Text, View, Button } from 'native-base'
import Carousel, { Pagination } from 'react-native-snap-carousel'

import NavigationService from './../../NavigationService'

export default class CNHUploader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeSlide: 0,
            carouselItems: [
                {
                    content: "Seu carro está a poucos passos de você!",
                    background: "#F38063",
                    image: require('./car-orange.png')
                },
                {
                    content: "Economize tempo e reduza a burocracia na compra!",
                    background: "#37A5E1",
                    image: require('./car-blue.png')
                },
                {
                    button: {
                        label: "Escaneie o Voucher!",
                        target: "VoucherScan",
                        theme:  "light"
                    },
                    background: "#51AF39",
                    image: require('./car-green.png')
                }
            ]
        }
    }

    get pagination() {
        const { carouselItems, activeSlide } = this.state
        return (
            <View style={styles.paginationWrapper}>
                <Pagination
                    dotsLength={carouselItems.length}
                    activeDotIndex={activeSlide}
                    containerStyle={styles.pagination}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 8,
                        backgroundColor: 'rgba(255, 255, 255, 0.92)'
                    }}
                    inactiveDotStyle={{
                        // Define styles for inactive dots here
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
            </View >
        )
    }

    _renderItem({ item, index }) {
        const button = item.button ? (
            <Button {...{[item.button.theme]:true}} style={styles.button} onPress={() => NavigationService.navigate('VoucherScanner')}>
                <Text>{item.button.label}</Text>
            </Button>
        ) : null
        const content = item.content ? (
            <Text style={styles.item} >{item.content}</Text>
        ) : null
        return (
            <Container style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: item.background
            }}>
                <Image style={styles.image} source={item.image} />
                {content}
                {button}
            </Container>
        )
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.carousel}>
                <SafeAreaView>
                    <Carousel
                        data={this.state.carouselItems}
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={Dimensions.get('window').width}
                        renderItem={this._renderItem}
                        onSnapToItem={(index) => this.setState({ activeSlide: index })}
                    />
                    { this.pagination }
                </SafeAreaView>
            </View>
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
        textAlign: 'center'
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 100
    },
    pagination: {
    },
    paginationWrapper: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    }
})