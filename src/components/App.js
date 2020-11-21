import React, { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import Logout from './Logout';
import Login from './login';
import StoreReport from './store/storeReport';
import History from './store/History';
import STORE_HISTORY from '../graphql/queries/transactions';
import GET_ALL_PRODUCTS from '../graphql/queries/getAllProducts';

const initialState = {
    productName: 'byabuze',
    kg: '25',
    period: 'today',
    modal: false
}
const App = () => {
    const { data } = useQuery(STORE_HISTORY);
    const allProducts = useQuery(GET_ALL_PRODUCTS);
    const [transactions, setTransactions] = useState();
    const [products, setProducts] = useState();
    const  [remainingRiceBagsBykg, setRemainingRiceBagsBykg] = useState()
    
    const [ attributes, setAttributes ] = useState({ ...initialState });
    const [modal, setModal] = useState(false);
    const [component, setComponent] = useState('');

    useEffect(() => {
        data && setTransactions(data.getAllTransactions)
        allProducts && allProducts.data && setProducts(allProducts.data.getAllProducts);
    }, [allProducts.data, data])

    const toggle = (tag) => {
        setComponent(tag);
        setModal(true);
        }

    const closemodal = () => {
        setAttributes(initialState)
        setModal(false);
    }

    const handleChanges = (e) => {
        setAttributes({
            ...attributes,
            [e.target.name]: e.target.value
        });
    };

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Login />
                </Route>
                <Route exact path='/report'>
                    <StoreReport
                        toggle = {toggle}
                        modal = {modal}
                        component={component}
                        closemodal={closemodal}
                        handleChanges={handleChanges}
                        attributes={attributes}
                        transactions={transactions && transactions}
                        setTransactions={setTransactions}
                        allProducts={products}
                        setProducts={setProducts}
                        remainingRiceBagsBykg={remainingRiceBagsBykg}
                        setRemainingRiceBagsBykg={setRemainingRiceBagsBykg}
                    />
                </Route>
                <Route exact path='/history'>
                    <History
                        toggle = {toggle}
                        modal = {modal}
                        component={component }
                        closemodal={closemodal}
                        handleChanges={handleChanges}
                        attributes={attributes}
                        transactions={transactions && transactions}
                        setTransactions={setTransactions}
                        allProducts={products}
                        setProducts={setProducts}
                        remainingRiceBagsBykg={remainingRiceBagsBykg}
                        setRemainingRiceBagsBykg={setRemainingRiceBagsBykg}
                    />
                </Route>
                <Route exact path='/logout'>
                    <Logout/>
                </Route>
            </Switch>
        </BrowserRouter>
        );
    }
 
export default App;
