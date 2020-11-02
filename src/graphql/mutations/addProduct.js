import gql from 'graphql-tag';

const ADD_PRODUCT = gql`
mutation($productName: String!, $bagSize: Int!, $quantity: Int!, $productType: String!){
    registerProduct(productName: $productName, productType: $productType, bagSize: $bagSize, quantity: $quantity){
        productName
        bagSize
        quantity
        currentQuantity
    }
}`

export default ADD_PRODUCT;
