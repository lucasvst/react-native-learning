import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Header, Content, Button, Text, Spinner } from 'native-base'
import VoucherService from '../../services/VoucherService'

class VoucherDataLoader extends Component {
    constructor(props) {
        super()
        this.state = {
            loading: false,
            client: {
                name: undefined,
                cpf: undefined,
                email: undefined,
            },
            operationRequest: {
                vehicleModel: undefined,
                vehicleModelYear: undefined,
                vechicleManufactureYear: undefined,
                vehicleMake: undefined,
                vehicleValue: undefined,
                installments: undefined,
            }
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {this.state.loading ? <Spinner /> : null}
                <Text>Nome: {this.state.client.name}</Text>
                <Text>CPF: {this.state.client.cpf}</Text>
                <Text>email: {this.state.client.email}</Text>
                <Text>Fabricante: {this.state.operationRequest.vehicleMake}</Text>
                <Text>Veículo: {this.state.operationRequest.vehicleModel}</Text>
                <Text>
                    Ano/Modelo: {this.state.operationRequest.vehicleManufactureYear} /
                    {this.state.operationRequest.vehicleModelYear}
                </Text>
                <Text>Valor: {this.state.operationRequest.vehicleValue}</Text>
                <Text>Parcelas: {this.state.operationRequest.installments}</Text>
            </View>
        )
    }
    componentDidMount() {
        this.setState({ loading: true })
        VoucherService.getVoucherData(this.props.navigation.getParam('transactionId')).then(transaction => {
            this.setState({ loading: false })
            this.setState({
                client: transaction.financeTransaction.client,
                operationRequest: transaction.financeTransaction.operationRequest,
            })
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default VoucherDataLoader