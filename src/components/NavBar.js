import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const NavBar = ({ navBar, homeTitle, navList, textDecoration, toggle }) => {
    return (
        <div className={`${navBar}`}>
            <Link to='/report'>
                <div className={`${homeTitle}`}>
                    <h1>Rice-Store</h1>
                </div>
            </Link>
            <div className={`${navList}`}>
                <ul>
                    <Link to="#" className={`${textDecoration}`}>
                        <li onClick={() => toggle('sell')} id='sell'>Sell</li>
                    </Link>

                    <Link to="#" className={`${textDecoration}`}>
                        <li onClick={() => toggle('addRound')}>Add Round</li>
                    </Link>

                    <Link to="#" className={`${textDecoration}`}>
                        <li onClick={() => toggle('addProduct')}>Add Bags</li>
                    </Link>
                    
                    <Link to="/history" className={`${textDecoration}`}>
                        <li>History</li>
                    </Link>
                    <Link to="/logout" className={`${textDecoration}`}>
                        <li>Logout</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

NavBar.propTypes = {
    
};

export default NavBar;