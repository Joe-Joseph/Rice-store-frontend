import gql from 'graphql-tag';

const USER_LOGIN = gql`
mutation($email: String!, $password: String!,){
    loginUser(email: $email, password: $password){
        email
        token
    }
}`

export default USER_LOGIN;
