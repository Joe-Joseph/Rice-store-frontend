import React from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import Input from '../components/common/Input';

const RightContainer = ({ handleChanges, handleSubmit }) => {
    return (
        <div className="page-container__right">
            <div className="form-header">
                <h2>Sign in to Rice Store</h2>
                <p>Use your registered email</p>
            </div>
            <Form handleSubmit={handleSubmit} className="form">
                <Input type="email" classes="form__input" inputName="email" placeholder="Email" inputId="email" handleChanges={handleChanges}/>
                <Input type="password" classes="form__input" inputName="password" placeholder="Password" inputId="password" handleChanges={handleChanges}/>
                <p className="password-reset">Reset your password</p>
                <button type="submit" className="button btn-sign">Signin</button>
            </Form>
        </div>
    );
};

RightContainer.propTypes = {
    data: PropTypes.object,
    handleChanges: PropTypes.func,
    handleSubmit: PropTypes.func
};

export default RightContainer;