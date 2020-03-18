import React from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';

const RightContainer = ({data, handleChanges, handleSubmit}) => {
    return (
        <div className="container__right">
            <div className="form-header">
                <h2>Sign in to Rice Store</h2>
                <p>Use your registered email</p>
            </div>
            <Form data={data} handleChanges={handleChanges}handleSubmit={handleSubmit}/>
        </div>
    );
};

RightContainer.propTypes = {
    data: PropTypes.object,
    handleChanges: PropTypes.func,
    handleSubmit: PropTypes.func
};

export default RightContainer;