import React from 'react';
import ReactDom from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
// import { BrowserRouter as Router } from 'react-router-dom';
import './styles/main.scss';
// import client from './util/ApolloClient';
import App from '../src/components/App';


const client = new ApolloClient({
    uri: 'https://rice-store.herokuapp.com/'
})

const renderToDOM = () => {
  if (document.getElementById('app') !== null) {
    ReactDom.render(
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          {/* <Router> */}
            <App />
          {/* </Router> */}
        </ApolloHooksProvider>
      </ApolloProvider>,
      document.getElementById('app'),
    );
  }
};

renderToDOM();
// console.log('--------HERE---FUNC-------', renderToDOM());
export default renderToDOM;

// import React from 'react';
// import ReactDom from 'react-dom';
// import { ApolloProvider } from 'react-apollo';
// import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
// // import { BrowserRouter as Router } from 'react-router-dom';
// import './assets/styles/main.scss';
// // import client from './util/ApolloClient';
// import App from '../src/components/App';


// const client = new ApolloClient({
//   uri: 'https://rice-store.herokuapp.com/'
// });

// const renderToDOM = () => {
//   if (document.getElementById('app') !== null) {
//     ReactDom.render(
//       <ApolloProvider client={client}>
//         <ApolloHooksProvider client={client}>
//           <Router>
//             <App />
//           </Router>
//         </ApolloHooksProvider>
//       </ApolloProvider>,
//       document.getElementById('app'),
//     );
//   }
// };

// renderToDOM();
// export default renderToDOM;