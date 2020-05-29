import React from 'react';
import ReactDom from 'react-dom';
import 'babel-polyfill';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../src/components/App';
import client from './graphql/ApolloClient';


const renderToDOM = () => {
  if (document.getElementById('app') !== null) {
    ReactDom.render(
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Router>
            <App />
          </Router>
        </ApolloHooksProvider>
      </ApolloProvider>,
      document.getElementById('app'),
    );
  }
};

renderToDOM();

export default renderToDOM;
