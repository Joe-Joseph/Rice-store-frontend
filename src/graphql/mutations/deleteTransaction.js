import gql from 'graphql-tag';

const DELETE_TRANSACTION = gql`
mutation($transactionId: Int!){
    deleteOneTransaction(transactionId: $transactionId){
        message
    }
}`

export default DELETE_TRANSACTION;
