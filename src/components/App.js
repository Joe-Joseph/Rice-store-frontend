import React, { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Logout from './Logout';
import Login from './login';
import StoreReport from './store/storeReport';
import History from './store/History';

const initialState = {
    productName: 'byabuze',
    kg: '25',
    period: 'today'
}
const App = () => {
    const [ attributes, setAttributes ] = useState({ ...initialState });
    const [modal, setModal] = useState(false);
    const [component, setComponent] = useState('');

    const toggle = (tag) => {
        setComponent(tag);
        setModal(!modal);
        }

    const closemodal = () => {
        setModal(false);
        setAttributes(initialState)
    }

    const handleChanges = (e) => {
        setAttributes({
            ...attributes,
            [e.target.name]: e.target.value
        });
    };

    // const handleRadioClick = (e) => {
    //     console.log('hhhhhhh', e)
    //     setAttributes({
    //         ...attributes,
    //         [e.target.name]: e.target.value
    //     });
    // }

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
