import React from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import Input from '../components/common/Input';
import MessageCard from '../components/common/MessageCard'

const RightContainer = ({ handleChanges, handleSubmit, error, loading }) => {
    return (
        <div className="page-container__right">
            {error && <div className="error-message">
                <MessageCard message={error.graphQLErrors[0].message} />
            </div>}
            <div className="form-header">
                <h2>Sign in to Rice Store</h2>
                <p>Use your registered username</p>
            </div>
            <Form handleSubmit={handleSubmit} className="form">
                <Input type="text" classes="form__input" inputName="username" placeholder="Username" inputId="username" handleChanges={handleChanges}/>
                <Input type="password" classes="form__input" inputName="password" placeholder="Password" inputId="password" handleChanges={handleChanges}/>
                <button type="submit" className="button btn-sign">{loading ? "Loading...": "Signin"}</button>
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