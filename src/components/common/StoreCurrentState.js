import React from 'react';
import PropTypes from 'prop-types';

const StoreCurrentState = ({ containerClass, bagClass, moneyClass, blockClass, totalSoldBags, totalSoldBagsMoney }) => {
    return (
        <div className={containerClass}>
            <div className={bagClass}>{ totalSoldBags ? totalSoldBags : 0 } <span className={blockClass}>bags</span></div>
            <div className={moneyClass}>{ totalSoldBagsMoney ? totalSoldBagsMoney : 0} <span className={blockClass}>Frw</span></div>
        </div>
    );
};

StoreCurrentState.propTypes = {
    
};

export default StoreCurrentState;