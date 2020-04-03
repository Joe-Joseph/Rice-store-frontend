import React from 'react';
import LeftContainer from '../../container/LeftContainer';
import MyTable from '../common/Table';
import ReusableTable from '../common/ReusableTable';
import NavBar from '../NavBar';
import SellProduct from '../store/SellProduct';
import AddRound from './AddRound';
import AddProduct from './AddProduct';


const StoreReport = ({ modal, toggle, component, closemodal, handleChanges, attributes }) => {
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
                    <MyTable />
                    </div>
                    <button className="btn-history">History</button>
                    <div className="report-container__remaining">
                        <p className="report-title">Remaining Bags</p>
                        <ReusableTable />
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
