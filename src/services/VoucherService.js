export default {
    getVoucherData(transactionId) {
        return fetch(`https://financeapi.zflow.com.br/transaction/${transactionId}/checkpendingdata/canalproprioitau`)
            .then((response) => {
                return response.json()
            })
            .catch((error) => {
                console.error(error)
            })
    }
}