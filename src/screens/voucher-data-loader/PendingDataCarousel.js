import React, { Component } from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'
import { Text, Card, CardItem } from 'native-base'
import Carousel from 'react-native-snap-carousel'

class PendingDataCarousel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            entries: [
                {
                    title: 'Tire uma foto da sua CNH'
                },
                {
                    title: 'Informe os dados do vendedor'
                },
                {
                    title: 'Deposite o valor da entrada'
                }
            ]
        }
    }

    _renderItem({ item, index }) {
        return (
            <Card style={styles.slide}>
                <CardItem>
                    <Text style={styles.title}>{item.title}</Text>
                </CardItem>
            </Card>
        )
    }

    render() {
        return (
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.state.entries}
                renderItem={this._renderItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width}
            />
        )
    }
}

const styles = StyleSheet.create({
    slide: {
        // flex: 1,
        paddingTop: 30,
        paddingBottom: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {}
})

export default PendingDataCarousel
