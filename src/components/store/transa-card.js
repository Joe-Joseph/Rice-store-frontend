import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

const TransctionCard = ({ transaction, firstName }) => {
    return (
        <div className="transa-card">
            <table>
                <tbody>
                    <tr className="history-report-data">
                        <td>Rice Type</td>
                        <td>{ transaction.productName }</td>
                    </tr>
                    <tr className="history-report-data">
                        <td>Bag size</td>
                        <td>{ transaction.bagSize }</td>
                    </tr>
                    <tr className="history-report-data">
                        <td>Quantity</td>
                        <td>{ transaction.addedQuantity }</td>
                    </tr>
                    <tr className="history-report-data">
                        <td>1 Bag</td>
                        <td>{ transaction.oneBagCost }</td>
                    </tr>
                    <tr className="history-report-data">
                        <td>Total bags</td>
                        <td>{ transaction.currentQuantity }</td>
                    </tr>
                    <tr className="history-report-data">
                        <td>Employee</td>
                        <td>{ firstName }</td>
                    </tr>
                    <tr className="history-report-data">
                        <td>Transaction Type</td>
                        <td>{ transaction.transactionType }</td>
                    </tr>
                    <tr className="history-report-data">
                        <td>Total Cost</td>
                        <td>{ transaction.totalCost}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

TransctionCard.propTypes = {
    
};

export default TransctionCard;