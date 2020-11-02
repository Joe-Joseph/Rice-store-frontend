import React from 'react';
import PropTypes from 'prop-types';

const StoreCurrentState = ({
    containerClass,
    bagClass, moneyClass,
    blockClass,
    totalRiceSoldBags,
    totalRiceSoldBagsMoney,
    kg
}) => {
    return (
        <div className={containerClass}>
            <div className={bagClass}>{kg ? kg : null }<span className={blockClass}>kgs</span></div>
            <div className={`${bagClass} backColor`}>{ totalRiceSoldBags ? totalRiceSoldBags.toLocaleString('eng') : 0 } <span className={blockClass}>bags</span></div>
            <div className={moneyClass}>{ totalRiceSoldBagsMoney ? totalRiceSoldBagsMoney.toLocaleString('eng') : 0} <span className={blockClass}>Frw</span></div>
        </div>
    );
};

StoreCurrentState.propTypes = {
    
};

export default StoreCurrentState;
