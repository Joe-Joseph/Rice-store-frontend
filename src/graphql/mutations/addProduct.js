import gql from 'graphql-tag';

const ADD_PRODUCT = gql`
mutation($productName: String!, $bagSize: Int!, $addedQuantity: Int!){
    registerProduct(productName: $productName, bagSize: $bagSize, addedQuantity: $addedQuantity){
        roundId
        employee
        productName
        bagSize
        addedQuantity
        currentQuantity
        totalBags
    }
}`

export default ADD_PRODUCT;
