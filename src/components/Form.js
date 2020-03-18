import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ handleChanges, handleSubmit}) => {
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__content">
                <div className="form__group">
                    <input type="email" name= "email" className="form__input" placeholder="Email" id="email" onChange={handleChanges} required></input>
                    <label htmlFor="email" className="form__label"></label>
                </div>

                <div className="form__group">
                    <input type="password" name= "password" className="form__input" placeholder="Password" id="password" onChange={handleChanges} required></input>
                    <label htmlFor="password" className="form__label"></label>
                </div>

                <p className="password-reset">Reset your password</p>

                <button type="submit" className="btn btn-sign">SIGNIN</button>
            </div>

        </form>
    );
};

Form.propTypes = {
    handleChanges: PropTypes.func,
    handleSubmit: PropTypes.func
}

export default Form;