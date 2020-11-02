import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import ModalExample from '../common/Modal';
import Form from '../Form';
import Input from '../common/Input';
import MessageCard from '../common/MessageCard'
import { updateProductOnAdd } from '../../helpers/updateProductHelper'

import ADD_PRODUCT from '../../graphql/mutations/addProduct';
import GET_ALL_PRODUCTS from '../../graphql/queries/getAllProducts';


const AddProduct = ({ modal, toggle, closemodal, handleChanges, attributes, transactions, setTransactions }) => {
    const [addProduct, {loading, error}] = useMutation(ADD_PRODUCT, {
        update(proxy, result){
            const newProducts = proxy.readQuery({
                query: GET_ALL_PRODUCTS
            })

            const product = newProducts && newProducts.getAllProducts.find(product => product.productId === result.data.registerProduct.productId)
            const { transactionType, quantity } = result.data.registerProduct

            const allTransactions = result && [result.data.registerProduct, ...transactions]
            setTransactions(allTransactions)
            updateProductOnAdd(newProducts, product, transactionType, quantity)
            closemodal()
            proxy.writeQuery({ query: GET_ALL_PRODUCTS, newProducts })
        },

        variables:{
            productType: attributes.productType,
            productName: attributes.productName,
            bagSize: parseInt(attributes.bagSize),
            quantity: parseInt(attributes.quantity)
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct()
    }

    return (
        <ModalExample
            modal={modal}
            toggle={ toggle }
            closemodal={ closemodal }
        >
            <Form buttonName="Submit" handleSubmit={handleSubmit} toggle={toggle} className="modal-form">
                <select name="productType" id="cars" className="product-type" onChange={handleChanges}>
                    <option value="" disabled selected>Select product type</option>
                    <option value="rice">Rice</option>
                    {/* <option value="cement">Cement</option> */}
                </select>

                {attributes.productType === 'rice' ?
                    <select name="productName" className="product-type" onChange={handleChanges}>
                        <option value="" disabled selected>Select product name</option>
                        <option value="byabuze">Byabuze</option>
                        <option value="yusufu">Yusufu</option>
                        <option value="john">John</option>
                    </select> : attributes.productType === 'cement' ?

                    <select name="productName" className="product-type" onChange={handleChanges}>
                        <option value="" disabled selected>Select product name</option>
                        <option value="nyarwanda">Nyarwanda</option>
                        <option value="tanzania">Tanzania</option>
                    </select>: null
                }
                <Input
                    type="number"
                    classes="form__input"
                    placeholder="Bag size"
                    inputName="bagSize"
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
                        || !attributes.kg
                        || !attributes.quantity
                    }
                >{loading ? "Submiting...": "Submit"}</button>
            </Form>
            {/* <MessageCard/> */}
        </ModalExample>
    );
};

AddProduct.propTypes = {
    
};

export default AddProduct;