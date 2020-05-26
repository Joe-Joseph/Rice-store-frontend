import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import ModalExample from '../common/Modal';
import Form from '../Form';
import Input from '../common/Input';

import ADD_PRODUCT from '../../graphql/mutations/addProduct';


const AddProduct = ({ modal, toggle, closemodal, handleChanges, attributes }) => {
    const [addProduct, {data, error}] = useMutation(ADD_PRODUCT);

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct({
            variables:{
                productName: attributes.productName,
                bagSize: parseInt(attributes.bagSize),
                addedQuantity: parseInt(attributes.quantity)
            }
        })
    }

    return (
        <ModalExample
            modal={modal}
            toggle={ toggle }
            closemodal={ closemodal }
        >
            <Form buttonName="Submit" handleSubmit={handleSubmit} toggle={toggle} className="modal-form">
                <Input type="text" classes="form__input" placeholder="Rice type" inputName="productName" handleChanges={handleChanges}/>
                <Input type="number" classes="form__input" placeholder="Bag size" inputName="bagSize" handleChanges={handleChanges}/>
                <Input type="number" classes="form__input" placeholder="Bag quantity" inputName="quantity" handleChanges={handleChanges}/>
                <button type="submit" className="modal-button">Submit</button>
            </Form>
        </ModalExample>
    );
};

AddProduct.propTypes = {
    
};

export default AddProduct;