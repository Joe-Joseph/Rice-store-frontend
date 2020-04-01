import gql from 'graphql-tag';

const ADD_ROUND = gql`
mutation($carPlate: String!, $driverName: String!){
    registerRound(carPlate: $carPlate, driverName: $driverName){
        carPlate
        driverName
    }
}`

export default ADD_ROUND;
