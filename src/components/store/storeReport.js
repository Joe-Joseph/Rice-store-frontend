import React from 'react';
import PropTypes from 'prop-types';
import LeftContainer from '../../container/LeftContainer';

const storeReport = props => {
    return (
        <div className="container">
        <div className="container__content">
            <LeftContainer />
            <RightContainer
                handleChanges={handleChanges}
                handleSubmit={handleSubmit}
                data={data}
            />
        </div>
        </div>
    );
};

storeReport.propTypes = {
    
};

export default storeReport;
