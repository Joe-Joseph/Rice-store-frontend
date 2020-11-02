import gql from 'graphql-tag';

const GET_ALL_PRODUCTS = gql`
    query products{
        getAllProducts{
            productId
            storeId
            productName
            productType
            bagSize
            quantity
            createdAt
        }
    }`

export default GET_ALL_PRODUCTS;