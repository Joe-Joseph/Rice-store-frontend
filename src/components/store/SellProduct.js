import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ModalExample from '../common/Modal';
import Form  from '../Form';
import Input from '../common/Input';
import MessageCard from '../common/MessageCard'

import SELL_PRODUCT from '../../graphql/mutations/sellProduct';

const SellProduct = ({modal, toggle, closemodal, handleChanges, attributes }) => {
    // const [hidden, setHidden] = useState(false);
    const [ sellProducts, { data, error } ] = useMutation(SELL_PRODUCT);

    const handleSubmit = (e) => {
        e.preventDefault();
        sellProducts({
            variables: {
                productName: attributes.productName,
                productType: attributes.productType,
                bagSize: parseInt(attributes.bagSize),
                oneBagCost: parseInt(attributes.price),
                quantity: parseInt(attributes.quantity)
            },
        });
    }

    // error && setHidden(true) && toggle()
    error && console.log('Errorrrr>>>>>>', error.graphQLErrors[0].message)
    data && closemodal();

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
                    <option value="cement">Cement</option>
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
                >Submit</button>
            </Form>
        </ModalExample>
    );
};

SellProduct.propTypes = {
    
};

export default SellProduct;