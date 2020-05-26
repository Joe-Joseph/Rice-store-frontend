import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import LeftContainer from '../../container/LeftContainer';
import StoreCurrentState from '../common/StoreCurrentState';
import Input from '../common/Input';
import NavBar from '../NavBar';
import SellProduct from '../store/SellProduct';
import AddRound from './AddRound';
import AddProduct from './AddProduct';
import STORE_HISTORY from '../../graphql/queries/transactions';


const StoreReport = ({ modal, toggle, component, closemodal, handleChanges, attributes }) => {
    const { data } = useQuery(STORE_HISTORY);
    const transactions = data && data.getTransactionsByRound;

    let totalSoldBags = 0;
    let totalAddedBags = 0;
    let totalSoldBagsMoney = 0;
    let totalBags = 0;
    let totalBagsCost = 0;
    let totalAllAddedBags = 0;

    transactions && transactions.forEach(element => {
        if(element.transactionType === 'added' && element.bagSize === attributes.kg) {
            totalAddedBags = totalAddedBags + parseInt(element.addedQuantity);
        }

        if(element.transactionType === 'sold' && element.bagSize === attributes.kg) {
            totalSoldBags = totalSoldBags + parseInt(element.addedQuantity);
            totalSoldBagsMoney = totalSoldBagsMoney + parseInt(element.totalCost);
        }
    });

    const remainingBags = totalAddedBags - totalSoldBags;

    transactions && transactions.forEach(element => {
        if(element.transactionType === 'sold'){
            totalBags = totalBags + parseInt(element.addedQuantity);
            totalBagsCost = totalBagsCost + parseInt(element.totalCost);
        }

        if(element.transactionType === 'added'){
            totalAllAddedBags = totalAllAddedBags + parseInt(element.addedQuantity);
        }
    });

    const allRemainingBags = totalAllAddedBags - totalBags;

    const firstName = localStorage.getItem('firstName');

    return (
        <div>
            <NavBar
                navBar="nav-bar"
                homeTitle="nav-bar__home-title"
                navList="nav-bar__nav-list"
                textDecoration="text-decoration"
                toggle={ toggle }
            />
            <div className="page-container">
            <div className="page-container__content margin-top">
                <LeftContainer userFirstName={ `Hello ${firstName}` }/>
                <div className="report-container">
                    <div className="report-container__sold">
                        <p className="report-title">Sold Bags</p>
                        <Input classes="kg-input" type="number" placeholder="Enter bag size" inputName="kg" handleChanges={handleChanges}/>
                        <p className="report-title move-up"> {attributes.kg ? `${attributes.kg} kg` : 'kg'}</p>
                        <StoreCurrentState
                            containerClass="report"
                            bagClass="bags"
                            moneyClass="money"
                            blockClass="bags-block"
                            totalSoldBags={totalSoldBags}
                            totalSoldBagsMoney={totalSoldBagsMoney}
                        />

                        <p className="report-title">Total</p>

                        <div className="report">
                            <div className="bags">{ totalBags ? totalBags : 0 } <span className="bags-block">bags</span></div>
                            <div className="money">{ totalBagsCost ? totalBagsCost : 0 } <span className="bags-block">Frw</span></div>
                        </div>
                    </div>
                    <button className="btn-history">History</button>
                    <div className="report-container__remaining">
                        <p className="report-title">Remaining Bags</p>
                        <div className="report move-down">
                            <div className="bags">{ remainingBags && remainingBags} <span className="bags-block">bags</span></div>
                            <div className="money">{ allRemainingBags ? allRemainingBags : 0 } <span className="bags-block">bags</span></div>
                        </div>
                    </div>
                    <button className="btn-sell" onClick={toggle}>Sell</button>
                    {
                        (component==='sell') ?
                            <SellProduct
                                modal={modal}
                                toggle={ toggle }
                                closemodal={closemodal}
                                handleChanges={handleChanges}
                                attributes={attributes}
                            />
                        : (component==='addRound') ?
                            <AddRound
                                modal={modal}
                                toggle={toggle}
                                closemodal={closemodal}
                                handleChanges={handleChanges}
                                attributes={attributes}
                            />
                        : (component==='addProduct') ?
                            <AddProduct
                                modal={modal}
                                toggle={toggle}
                                closemodal={closemodal}
                                handleChanges={handleChanges}
                                attributes={attributes}
                            />: null
                    }

                </div>
            </div>
            </div>
        </div>
    );
};

StoreReport.propTypes = {
    
};

export default StoreReport;
