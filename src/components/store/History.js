import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';

import NavBar from '../NavBar';
import SellProduct from '../store/SellProduct';
import AddProduct from '../store/AddProduct';
import TransctionCard from '../../components/store/transa-card';

const History = ({
    modal,
    toggle,
    component,
    allProducts,
    setProducts,
    closemodal,
    handleChanges,
    attributes,
    transactions,
    setTransactions,
}) => {
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
                        setTransactions={setTransactions}
                        transactions={transactions}
                        allProducts={allProducts}
                        setProducts={setProducts}
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
                        setTransactions={setTransactions}
                        transactions={transactions}
                    />
                : (component==='addProduct') ?
                    <AddProduct
                        modal={modal}
                        toggle={toggle}
                        closemodal={closemodal}
                        handleChanges={handleChanges}
                        attributes={attributes}
                        setTransactions={setTransactions}
                        transactions={transactions}
                    />: null
            }
        </div>
    );
};

History.propTypes = {

};

export default History;