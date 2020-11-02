import gql from 'graphql-tag';

const ADD_PRODUCT = gql`
mutation($productName: String!, $bagSize: Int!, $quantity: Int!, $productType: String!){
    registerProduct(productName: $productName, productType: $productType, bagSize: $bagSize, quantity: $quantity){
        transactionId
        productId
        productName
        productType
        bagSize
        oneBagCost
        quantity
        currentQuantity
        transactionType
        totalCost
        createdAt
    }
}`

export default ADD_PRODUCT;
