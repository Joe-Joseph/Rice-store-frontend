import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import ModalExample from '../common/Modal';
import Form from '../Form';
import Input from '../common/Input';

import ADD_ROUND from '../../graphql/mutations/addRound';

const AddRound = ({modal, toggle, closemodal, handleChanges, attributes}) => {
    const [addOneRound, { data, error }] = useMutation(ADD_ROUND);

    const handleSubmit = (e) => {
        e.preventDefault();
        addOneRound({
            variables:{
                carPlate: attributes.carPlate,
                driverName: attributes.driverName
            }
        })
    }

    data && console.log('======ZABONETSE======', data);
    return (
        <ModalExample
            modal={ modal }
            toggle={ toggle }
            closemodal={ closemodal }
        >
            <Form buttonName="Submit" handleSubmit={handleSubmit} toggle={ toggle } className="modal-form">
                <Input type="text" placeholder="Car Plate" inputName="carPlate" handleChanges={handleChanges}/>
                <Input type="text" placeholder="Driver Name" inputName="driverName" handleChanges={handleChanges}/>
                <button type="submit" className="modal-button">Submit</button>
            </Form>
        </ModalExample>
    );
};

AddRound.propTypes = {
    
};

export default AddRound;