import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Login from '../components/login'

const client = new ApolloClient({
    uri: 'https://rice-store.herokuapp.com/'
})

class App extends Component {
    render() { 
        return (
            <ApolloProvider client={client}>
                <Login />
            </ApolloProvider> 
         );
    }
}
 
export default App;