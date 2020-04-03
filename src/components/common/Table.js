import React from 'react';
import PropTypes from 'prop-types';

const MyTable = ({children}) => {
    return (
        <table>
            <thead>
                <tr>
                <th></th>
                <th></th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                <tr className="report-data">
                    <td>25kg</td>
                    <td>200 bags</td>
                    <td>2000000 Frw</td>
                </tr>
                <tr className="report-data">
                    <td>25kg</td>
                    <td>200 bags</td>
                    <td>2000000 Frw</td>
                </tr>
                <tr className="report-data">
                    <td className="bold-font">Total</td>
                    <td className="bold-font">200 bags</td>
                    <td className="bold-font">4000000 Frw</td>
                </tr>
            </tbody>
        </table>
    );
};

MyTable.propTypes = {
    
};

export default MyTable;