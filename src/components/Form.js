import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ handleSubmit, children, className }) => {
    return ( 
        <form className={className} onSubmit={handleSubmit}>
            <div className="form__content">
                {children}
            </div>
        </form>
    );
};

Form.propTypes = {
    handleChanges: PropTypes.func,
    handleSubmit: PropTypes.func
}

export default Form;