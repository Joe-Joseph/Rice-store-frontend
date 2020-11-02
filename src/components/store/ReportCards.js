import React from 'react'
import StoreCurrentState from '../common/StoreCurrentState';

const ReportCards = ({
    totalRiceSoldBags,
    totalRiceSoldBagsMoney,
    attributes,
    totalRiceBags,
    totalRiceBagsCost,
    remainingRiceBagsBykg,
    allRemainingBags,
    title,
    productName
}) => {
    return (
        <div className='sold_and_remaining'>
            <div className="report-container__sold">
                <p className="report-title">{`${productName ? productName.charAt(0).toUpperCase() + productName.slice(1) : ""} ${title} sold bags`}</p>
                {/* <p className="report-title move-up"> {attributes.kg ? `${attributes.kg} kg` : 'kg'}</p> */}
                <StoreCurrentState
                    containerClass="report"
                    bagClass="bags"
                    kg={attributes.kg}
                    moneyClass="money"
                    blockClass="bags-block"
                    totalRiceSoldBags={totalRiceSoldBags}
                    totalRiceSoldBagsMoney={totalRiceSoldBagsMoney}
                />

                {/* <p className="report-title">Total</p> */}

                <div className="report">
                    <div className="bags"><p>Total</p></div>
                    <div className="bags backColor">{ totalRiceBags ? totalRiceBags.toLocaleString('eng') : 0 } <span className="bags-block">bags</span></div>
                    <div className="money">{ totalRiceBagsCost ? totalRiceBagsCost.toLocaleString('eng') : 0 } <span className="bags-block">Frw</span></div>
                </div>
            </div>
            <div className="report-container__remaining">
                <p className="report-title">{`${productName ? productName.charAt(0).toUpperCase() + productName.slice(1) : ""} ${title} Remaining Bags`}</p>
                <div className="report move-down">
                    <div className="bags">{ remainingRiceBagsBykg && remainingRiceBagsBykg.toLocaleString('eng')} <span className="bags-block">bags</span></div>
                    <div className="money">{ allRemainingBags ? allRemainingBags.toLocaleString('eng') : 0 } <span className="bags-block">bags</span></div>
                </div>
            </div>
        </div>
    )
}

export default ReportCards
