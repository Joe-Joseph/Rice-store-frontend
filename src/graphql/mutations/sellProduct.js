import gql from 'graphql-tag';

const SELL_PRODUCT = gql`
mutation($productName: String!, $productType: String!, $bagSize: Int!, $oneBagCost: Int!, $quantity: Int!){
    sellProduct(productName: $productName, productType: $productType, bagSize: $bagSize, oneBagCost: $oneBagCost, quantity: $quantity){
        employee
        productName
        bagSize
        oneBagCost
        quantity
        currentQuantity
        transactionType
        totalCost
    }
}`

export default SELL_PRODUCT;
