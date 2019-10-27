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
            }
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Container>
                    <Header />
                        {this.state.loading ? <Spinner /> : null}
                        <View style={styles.content}>
                            <Text>Nome: {this.state.client.name}</Text>
                            <Text>CPF: {this.state.client.cpf}</Text>
                            <Text>email: {this.state.client.email}</Text>
                        </View>
                </Container>
            </View>
        )
    }
    componentDidMount() {
        this.setState({ loading: true })
        VoucherService.getVoucherData(this.props.navigation.getParam('transactionId')).then(transaction => {
            this.setState({ loading: false })
            this.setState({ client: transaction.financeTransaction.client })
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default VoucherDataLoader