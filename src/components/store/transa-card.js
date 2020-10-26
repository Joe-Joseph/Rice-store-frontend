import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

const TransctionCard = ({ transaction, firstName }) => {
    console.log('Transactions >>>>>>', transaction)
    return (
        <div className="transa-card">
            <table>
                <tbody>
                    <tr className="history-report-data">
                        <td>Category</td>
                        <td>{ transaction.productType }</td>
                    </tr>
                    <tr className="history-report-data">
                        <td>{ transaction.productType === 'rice' ? 'Rice name' : 'product name' }</td>
                        <td>{ transaction.productName }</td>
                    </tr>
                    <tr className="history-report-data">
                        <td>Bag size</td>
                        <td>{ transaction.bagSize }</td>
                    </tr>
                    <tr className="history-report-data">
                        <td>Quantity</td>
                        <td>{ transaction.quantity }</td>
                    </tr>
                    <tr className="history-report-data">
                        <td>1 Bag</td>
                        <td>{ transaction.oneBagCost }</td>
                    </tr>
                    <tr className="history-report-data">
                        <td>Total bags</td>
                        <td>{ transaction.totalCost }</td>
                    </tr>
                    <tr className="history-report-data">
                        <td>Date</td>
                        <td>{ transaction.createdAt }</td>
                    </tr>
                    <tr className="history-report-data">
                        <td>Transaction Type</td>
                        <td>{ transaction.transactionType }</td>
                    </tr>
                    {/* <tr className="history-report-data">
                        <td>Total Cost</td>
                        <td>{ transaction.totalCost}</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
};

TransctionCard.propTypes = {
    
};

export default TransctionCard;