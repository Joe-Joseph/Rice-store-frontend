import gql from 'graphql-tag';

const SELL_PRODUCT = gql`
mutation($productName: String!, $bagSize: Int!, $oneBagCost: Int!, $soldQuantity: Int!){
    sellProduct(productName: $productName, bagSize: $bagSize, oneBagCost: $oneBagCost, soldQuantity: $soldQuantity){
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
    }
}`

export default SELL_PRODUCT;
