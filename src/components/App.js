import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../components/login';
import StoreReport from '../components/store/StoreReport';
import History from '../components/store/History';


const App = () => {
    const [ attributes, setAttributes ] = useState({});
    const [modal, setModal] = useState(false);
    const [component, setComponent] = useState('');

    const toggle = (tag) => {
        setComponent(tag);
        setModal(!modal);
        }

    const closemodal = () => {
        setModal(false);
    }

    const handleChanges = (e) => {
        setAttributes({
            ...attributes,
            [e.target.name]: e.target.value
        });
    };

    return (
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
            <Route exact path='/Logout' component={Login} />
            <Route exact path='/home' component={StoreReport} />
        </Switch>
        );
    }
 
export default App;