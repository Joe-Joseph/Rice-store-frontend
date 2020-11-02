import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';

import NavBar from '../NavBar';
import SellProduct from '../store/SellProduct';
import AddRound from '../store/AddRound';
import AddProduct from '../store/AddProduct';
import TransctionCard from '../../components/store/transa-card';
import STORE_HISTORY from '../../graphql/queries/transactions';

const History = ({ modal, toggle, component, closemodal, handleChanges, attributes }) => {
    const { data } = useQuery(STORE_HISTORY);
    const transactions = data && data.getAllTransactions;
    return (
        <div>
            <NavBar
                navBar="side-bar"
                homeTitle="side-bar__app-title"
                navList="side-bar__link-list"
                textDecoration="side-bar__text-decoration"
                toggle={ toggle }
            />
            <div className="history-content">
                { transactions && transactions.map( transaction => (
                    <TransctionCard
                        transaction= { transaction }
                        key={transaction.transactionId}
                    />
                ))}
            </div>
            {
                (component==='sell') ?
                    <SellProduct
                        modal={modal}
                        toggle={ toggle }
                        closemodal={closemodal}
                        handleChanges={handleChanges}
                        attributes={attributes}
                    />
                : (component==='addRound') ?
                    <AddRound
                        modal={modal}
                        toggle={toggle}
                        closemodal={closemodal}
                        handleChanges={handleChanges}
                        attributes={attributes}
                    />
                : (component==='addProduct') ?
                    <AddProduct
                        modal={modal}
                        toggle={toggle}
                        closemodal={closemodal}
                        handleChanges={handleChanges}
                        attributes={attributes}
                    />: null
            }
        </div>
    );
};

History.propTypes = {

};

export default History;