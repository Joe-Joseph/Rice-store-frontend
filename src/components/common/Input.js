import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ handleChanges, type, inputName, placeholder, inputId }) => {
    return (
        <div className="form__group">
            <input type={type} name= {inputName} className="form__input" placeholder={placeholder} id={inputId} onChange={handleChanges} required></input>
            <label htmlFor="email" className="form__label"></label>
        </div>
    );
};

Input.propTypes = {
    
};

export default Input;