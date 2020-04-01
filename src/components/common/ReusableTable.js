import React from 'react';
import PropTypes from 'prop-types';


const ReusableTable = props => {
    return (
        <table>
            <thead>
                <tr>
                <th></th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                <tr className="report-data">
                    <td>25 kg</td>
                    <td>50000 Bags</td>
                </tr>
                <tr className="report-data">
                    <td>25kg</td>
                    <td>50000 Bags</td>
                </tr>
                <tr className="report-data">
                    <td className="bold-font">Total</td>
                    <td className="bold-font">1000 Bags</td>
                </tr>
            </tbody>
        </table>
    );
};

ReusableTable.propTypes = {
    
};

export default ReusableTable;