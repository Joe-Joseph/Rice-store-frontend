import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ModalExample from '../common/Modal';
import Form  from '../Form';
import Input from '../common/Input';
import MessageCard from '../common/MessageCard'
import { updateProductOnSell } from '../../helpers/updateProductHelper'

import SELL_PRODUCT from '../../graphql/mutations/sellProduct';
import STORE_HISTORY from '../../graphql/queries/transactions';
import GET_ALL_PRODUCTS from '../../graphql/queries/getAllProducts';

const SellProduct = ({
    modal,
    toggle,
    closemodal,
    handleChanges,
    attributes,
    setTransactions,
    transactions
}) => {
    // const [hidden, setHidden] = useState(false);
    const [ sellProduct, { loading, error } ] = useMutation(SELL_PRODUCT, {
        update(proxy, result){
            const newProducts = proxy.readQuery({
                query: GET_ALL_PRODUCTS,
            });
            const product = newProducts && newProducts.getAllProducts.find(product => product.productId === result.data.sellProduct.productId)
            const { transactionType, quantity } = result.data.sellProduct

            const allTransactions = result && [result.data.sellProduct, ...transactions]
            setTransactions(allTransactions)
            updateProductOnSell(newProducts, product, transactionType, quantity)
            closemodal()
            proxy.writeQuery({ query: GET_ALL_PRODUCTS, newProducts })
        },

        variables: {
            productName: attributes.productName,
            productType: attributes.productType,
            bagSize: parseInt(attributes.bagSize),
            oneBagCost: parseInt(attributes.price),
            quantity: parseInt(attributes.quantity)
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        sellProduct();
    }

    return (
        <ModalExample
            modal={modal}
            toggle={ toggle }
            closemodal={closemodal}
        >
            <Form buttonName="Submit" toggle={toggle} handleSubmit={handleSubmit} className="modal-form">
                <select name="productType" className="product-type" onChange={handleChanges}>
                    <option value="" disabled selected>Select product type</option>
                    <option value="rice">Rice</option>
                    {/* <option value="cement">Ciment</option> */}
                </select>

                {attributes.productType === 'rice' ?
                    <select name="productName" className="product-type" onChange={handleChanges}>
                        <option value="" disabled selected>Select product name</option>
                        <option value="byabuze">Byabuze</option>
                        <option value="yusufu">Yusufu</option>
                        <option value="yusufu">John</option>
                    </select> : attributes.productType === 'cement' ?

                    <select name="productName" className="product-type" onChange={handleChanges}>
                        <option value="" disabled selected>Select product name</option>
                        <option value="nyarwanda">Nyarwanda</option>
                        <option value="tanzania">Tanzania</option>
                    </select>: null
                }
                <Input
                    type="number" classes="form__input"
                    placeholder="Bag size"
                    inputName="bagSize"
                    handleChanges={handleChanges}
                />
                <Input
                    type="number"
                    classes="form__input"
                    placeholder="Price per bag"
                    inputName="price"
                    handleChanges={handleChanges}
                />
                <Input
                    type="number"
                    classes="form__input"
                    placeholder="Bag quantity"
                    inputName="quantity"
                    handleChanges={handleChanges}
                />
                { error && <MessageCard message={error.graphQLErrors[0].message} /> }
                <button
                    type="submit"
                    className="modal-button"
                    disabled={
                        !attributes.productName
                        || !attributes.productType
                        || !attributes.bagSize
                        || !attributes.price
                        || !attributes.quantity
                }
                >{loading ? "Submiting..." : "Submit"}</button>
            </Form>
        </ModalExample>
    );
};

SellProduct.propTypes = {
    
};

export default SellProduct;