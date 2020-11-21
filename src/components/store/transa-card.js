import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import deleteIcon from '../../images/deleteIcon.svg'
import { updateProductOnDelete } from '../../helpers/updateProductHelper'

import DELETE_TRANSACTION from '../../graphql/mutations/deleteTransaction'
import GET_ALL_PRODUCTS from '../../graphql/queries/getAllProducts';

const TransctionCard = ({ transaction, setTransactions, transactions }) => {
    const [ deleteOneTransaction, {loading} ] = useMutation(DELETE_TRANSACTION, {
        update(proxy){
            const newProducts = proxy.readQuery({
                query: GET_ALL_PRODUCTS,
            });
            const newData = transactions && transactions.filter(transa => transa.transactionId !== transaction.transactionId)
            const product = newProducts && newProducts.getAllProducts.find(product => product.productId === transaction.productId)
            const { transactionType, quantity } = transaction

            setTransactions(newData)
            updateProductOnDelete(newProducts, product, transactionType, quantity )
            proxy.writeQuery({ query: GET_ALL_PRODUCTS, newProducts })         
        },
        variables: {
            transactionId: transaction.transactionId
        }
    })

    return (
        <div className="transa-card">
            <div
                className={
                    loading ? "delete-icon-container loading-delete" :
                    "delete-icon-container not-loading-delete"
                }
                onClick={deleteOneTransaction}
            >
                {loading && <span>Deleting...  </span>}
                <img src={deleteIcon} className="check-icon"/>
            </div>
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