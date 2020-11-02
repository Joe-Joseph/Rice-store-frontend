import gql from 'graphql-tag';

const USER_LOGIN = gql`
mutation($username: String!, $password: String!,){
    loginUser(username: $username, password: $password){
        username
        firstName
        token
    }
}`

export default USER_LOGIN;
