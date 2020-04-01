import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import ModalExample from '../common/Modal';
import Form  from '../Form';
import Input from '../common/Input';

import SELL_PRODUCT from '../../graphql/mutations/sellProduct';

const SellProduct = ({modal, toggle, closemodal, handleChanges, attributes }) => {
    const [ sellProducts, { data, error } ] = useMutation(SELL_PRODUCT);

    const handleSubmit = (e) => {
        e.preventDefault();
        sellProducts({
            variables: {
                productName: attributes.rice,
                bagSize: parseInt(attributes.bagSize),
                oneBagCost: parseInt(attributes.price),
                soldQuantity: parseInt(attributes.quantity)
            },
        });
    }

    data && closemodal();

    data && console.log('DATA=========HERE=========WE=====GO', data);

    return (
        <ModalExample
            modal={modal}
            toggle={ toggle }
            closemodal={closemodal}
        >
            <Form buttonName="Submit" toggle={toggle} handleSubmit={handleSubmit} className="modal-form">
                <Input type="text" placeholder="Rice type" inputName="rice" handleChanges={handleChanges}/>
                <Input type="number" placeholder="Bag size" inputName="bagSize" handleChanges={handleChanges}/>
                <Input type="number" placeholder="Price per bag" inputName="price" handleChanges={handleChanges}/>
                <Input type="number" placeholder="Bag quantity" inputName="quantity" handleChanges={handleChanges}/>
                <button type="submit" className="modal-button">Submit</button>
            </Form>
        </ModalExample>
    );
};

SellProduct.propTypes = {
    
};

export default SellProduct;