import gql from 'graphql-tag';

const STORE_HISTORY = gql`
    query transactions{
        getTransactionsByRound{
            transactionId
            roundId
            employee
            productName
            bagSize
            oneBagCost
            addedQuantity
            currentQuantity
            transactionType
            totalCost
            totalBags
            createdAt
        }
    }`

export default STORE_HISTORY;