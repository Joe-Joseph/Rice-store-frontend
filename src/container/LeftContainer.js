import React from 'react';

const LeftContainer = ({userFirstName}) => {
    return (
        <div className="page-container__left">
            <h2>{`${userFirstName }`}!</h2>
            <p>Login to the application and manage your rice store</p>
        </div>
    );
};

export default LeftContainer;

