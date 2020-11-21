import gql from 'graphql-tag';

const SELL_PRODUCT = gql`
mutation($productName: String!, $productType: String!, $bagSize: Int!, $oneBagCost: Int!, $quantity: Int!){
    sellProduct(productName: $productName, productType: $productType, bagSize: $bagSize, oneBagCost: $oneBagCost, quantity: $quantity){
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

export default SELL_PRODUCT;
