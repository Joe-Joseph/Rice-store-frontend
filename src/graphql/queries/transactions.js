import gql from 'graphql-tag';

const STORE_HISTORY = gql`
    query transactions{
        getAllTransactions{
            transactionId
            productId
            productName
            productType
            bagSize
            oneBagCost
            quantity
            transactionType
            totalCost
            createdAt
        }
    }`

export default STORE_HISTORY;