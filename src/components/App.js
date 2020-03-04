import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
// import { ApolloProvider as ApolloHooksProvider} from '@apollo/react-hooks';

import Login from '../components/login'

const client = new ApolloClient({
    uri: 'https://rice-store.herokuapp.com/'
})

class App extends Component {
    render() { 
        return (
            <ApolloProvider client={client}>
                {/* <ApolloHooksProvider client={client}> */}
                    <Login />
                {/* </ApolloHooksProvider> */}
            </ApolloProvider> 
         );
    }
}
 
export default App;