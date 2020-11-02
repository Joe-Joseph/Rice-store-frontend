import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useQuery } from '@apollo/react-hooks';
import ReportCards from './ReportCards';
import Input from '../common/Input';
import NavBar from '../NavBar';
import SellProduct from '../store/SellProduct';
import AddRound from './AddRound';
import AddProduct from './AddProduct';
import STORE_HISTORY from '../../graphql/queries/transactions';
import GET_ALL_PRODUCTS from '../../graphql/queries/getAllProducts';


const StoreReport = ({
    modal,
    toggle,
    component,
    closemodal,
    handleChanges,
    attributes,
    transactions,
    setTransactions,
    allProducts,
    remainingRiceBagsBykg,
    setRemainingRiceBagsBykg
}) => {
    // const { data } = useQuery(STORE_HISTORY);
    // const products = useQuery(GET_ALL_PRODUCTS);
    // console.log('YOOOOOOOO', data && data.getAllTransactions)
    // const transactions = data && data.getAllTransactions;
    // const allProducts = products && products.data && products.data.getAllProducts;
    

    let totalRiceSoldBags = 0;
    let totalRiceSoldBagsMoney = 0;
    let totalRiceBags = 0;
    let totalRiceBagsCost = 0;
    // let remainingRiceBagsBykg = 0;
    let allRemainingBags = 0;

    let totalCimentSoldBags = 0;
    let totalCimentSoldBagsMoney = 0;
    let totalCimentBags = 0;
    let totalCimentBagsCost = 0;
    let totalCimentRemainingBags = 0;
    let remainingCimentBagsBykg = 0

    if(attributes.period === 'today'){
        transactions && transactions.forEach(transaction => {
            let year = transaction.createdAt && transaction.createdAt.split('/')[2]
            let month = transaction.createdAt && transaction.createdAt.split('/')[0]
            let day = transaction.createdAt && transaction.createdAt.split('/')[1]

            let thisYear = moment(Date.now()).format('L').split('/')[2]
            let thisMonth = moment(Date.now()).format('L').split('/')[0]
            let thisDay = moment(Date.now()).format('L').split('/')[1]

            if(transaction.transactionType === 'sold'
                && year === thisYear
                && month === thisMonth
                && day === thisDay
            ){
                transaction.productType === 'rice' ? (
                    totalRiceBagsCost = totalRiceBagsCost + parseInt(transaction.totalCost),
                    totalRiceBags = totalRiceBags + parseInt(transaction.quantity)
                ):
                transaction.productType === 'ciment' && (
                    totalCimentBagsCost = totalCimentBagsCost + parseInt(transaction.totalCost),
                    totalCimentBags = totalCimentBags + parseInt(transaction.quantity)  
                )
            }
            if(year === thisYear
                && month === thisMonth
                && day === thisDay
                && transaction.transactionType === 'sold'
                && transaction.bagSize === attributes.kg
                && transaction.productName === attributes.productName.toLowerCase()
            ){
                transaction.productType === 'rice'? (
                    totalRiceSoldBags = totalRiceSoldBags + parseInt(transaction.quantity),
                    totalRiceSoldBagsMoney = totalRiceSoldBagsMoney + parseInt(transaction.totalCost)
                ):
                transaction.productType === 'ciment' && (
                    totalCimentSoldBags = totalCimentSoldBags + parseInt(transaction.quantity),
                    totalCimentSoldBagsMoney = totalCimentSoldBagsMoney + parseInt(transaction.totalCost)
                )
            }
        })
    }

    if(attributes.period === 'yesterday'){
        transactions && transactions.forEach(transaction => {
            let year = transaction.createdAt && transaction.createdAt.split('/')[2]
            let month = transaction.createdAt && transaction.createdAt.split('/')[0]
            let day = transaction.createdAt && transaction.createdAt.split('/')[1]

            let thisYear = moment(Date.now()).format('L').split('/')[2]
            let thisMonth = moment(Date.now()).format('L').split('/')[0]
            let thisDay = moment(Date.now()).format('L').split('/')[1]

            if(transaction.transactionType === 'sold'
                && year === thisYear
                && month === thisMonth
                && parseInt(day) === parseInt(thisDay) - 1
            ){
                transaction.productType === 'rice' ? (
                    totalRiceBagsCost = totalRiceBagsCost + parseInt(transaction.totalCost),
                    totalRiceBags = totalRiceBags + parseInt(transaction.quantity)
                ):
                transaction.productType === 'ciment' && (
                    totalCimentBagsCost = totalCimentBagsCost + parseInt(transaction.totalCost),
                    totalCimentBags = totalCimentBags + parseInt(transaction.quantity)  
                )
            }
            if(year === thisYear
                && month === thisMonth
                && parseInt(day) === parseInt(thisDay) - 1
                && transaction.transactionType === 'sold'
                && transaction.bagSize === attributes.kg
                && transaction.productName === attributes.productName.toLowerCase()
            ){
                transaction.productType === 'rice'? (
                    totalRiceSoldBags = totalRiceSoldBags + parseInt(transaction.quantity),
                    totalRiceSoldBagsMoney = totalRiceSoldBagsMoney + parseInt(transaction.totalCost)
                ):
                transaction.productType === 'ciment' && (
                    totalCimentSoldBags = totalCimentSoldBags + parseInt(transaction.quantity),
                    totalCimentSoldBagsMoney = totalCimentSoldBagsMoney + parseInt(transaction.totalCost)
                )
            }
        })
    }

    if(attributes.period === 'month'){
        transactions && transactions.forEach(transaction => {
            let year = transaction.createdAt && transaction.createdAt.split('/')[2]
            let month = transaction.createdAt && transaction.createdAt.split('/')[0]

            let thisYear = moment(Date.now()).format('L').split('/')[2]
            let thisMonth = moment(Date.now()).format('L').split('/')[0]

            if(transaction.transactionType === 'sold'
                && year === thisYear
                && month === thisMonth
            ){
                transaction.productType === 'rice' ? (
                    totalRiceBagsCost = totalRiceBagsCost + parseInt(transaction.totalCost),
                    totalRiceBags = totalRiceBags + parseInt(transaction.quantity)
                ):
                transaction.productType === 'ciment' && (
                    totalCimentBagsCost = totalCimentBagsCost + parseInt(transaction.totalCost),
                    totalCimentBags = totalCimentBags + parseInt(transaction.quantity)  
                )
            }
            if(year === thisYear
                && month === thisMonth
                && transaction.transactionType === 'sold'
                && transaction.bagSize === attributes.kg
                && transaction.productName === attributes.productName.toLowerCase()
            ){
                transaction.productType === 'rice'? (
                    totalRiceSoldBags = totalRiceSoldBags + parseInt(transaction.quantity),
                    totalRiceSoldBagsMoney = totalRiceSoldBagsMoney + parseInt(transaction.totalCost)
                ):
                transaction.productType === 'ciment' && (
                    totalCimentSoldBags = totalCimentSoldBags + parseInt(transaction.quantity),
                    totalCimentSoldBagsMoney = totalCimentSoldBagsMoney + parseInt(transaction.totalCost)
                )
            }
        })
    }

    if(attributes.period === 'lastMonth'){
        transactions && transactions.forEach(transaction => {
            let year = transaction.createdAt && transaction.createdAt.split('/')[2]
            let month = transaction.createdAt && transaction.createdAt.split('/')[0]

            let thisYear = moment(Date.now()).format('L').split('/')[2]
            let thisMonth = moment(Date.now()).format('L').split('/')[0]

            if(transaction.transactionType === 'sold'
                && year === thisYear
                && parseInt(month) === parseInt(thisMonth) - 1
            ){
                transaction.productType === 'rice' ? (
                    totalRiceBagsCost = totalRiceBagsCost + parseInt(transaction.totalCost),
                    totalRiceBags = totalRiceBags + parseInt(transaction.quantity)
                ):
                transaction.productType === 'ciment' && (
                    totalCimentBagsCost = totalCimentBagsCost + parseInt(transaction.totalCost),
                    totalCimentBags = totalCimentBags + parseInt(transaction.quantity)  
                )
            }
            if(year === thisYear
                && parseInt(month) === parseInt(thisMonth) - 1
                && transaction.transactionType === 'sold'
                && transaction.bagSize === attributes.kg
                && transaction.productName === attributes.productName.toLowerCase()
            ){
                transaction.productType === 'rice'? (
                    totalRiceSoldBags = totalRiceSoldBags + parseInt(transaction.quantity),
                    totalRiceSoldBagsMoney = totalRiceSoldBagsMoney + parseInt(transaction.totalCost)
                ):
                transaction.productType === 'ciment' && (
                    totalCimentSoldBags = totalCimentSoldBags + parseInt(transaction.quantity),
                    totalCimentSoldBagsMoney = totalCimentSoldBagsMoney + parseInt(transaction.totalCost)
                )
            }
        })
    }

    if(attributes.period === 'year'){
        transactions && transactions.forEach(transaction => {
            let year = transaction.createdAt && transaction.createdAt.split('/')[2]

            let thisYear = moment(Date.now()).format('L').split('/')[2]

            if(transaction.transactionType === 'sold'
                && year === thisYear
            ){
                transaction.productType === 'rice' ? (
                    totalRiceBagsCost = totalRiceBagsCost + parseInt(transaction.totalCost),
                    totalRiceBags = totalRiceBags + parseInt(transaction.quantity)
                ):
                transaction.productType === 'ciment' && (
                    totalCimentBagsCost = totalCimentBagsCost + parseInt(transaction.totalCost),
                    totalCimentBags = totalCimentBags + parseInt(transaction.quantity)  
                )
            }
            if(year === thisYear
                && transaction.transactionType === 'sold'
                && transaction.bagSize === attributes.kg
                && transaction.productName === attributes.productName.toLowerCase()
            ){
                transaction.productType === 'rice'? (
                    totalRiceSoldBags = totalRiceSoldBags + parseInt(transaction.quantity),
                    totalRiceSoldBagsMoney = totalRiceSoldBagsMoney + parseInt(transaction.totalCost)
                ):
                transaction.productType === 'ciment' && (
                    totalCimentSoldBags = totalCimentSoldBags + parseInt(transaction.quantity),
                    totalCimentSoldBagsMoney = totalCimentSoldBagsMoney + parseInt(transaction.totalCost)
                )
            }
        })
    }

    if(attributes.period === 'lastYear'){
        transactions && transactions.forEach(transaction => {
            let year = transaction.createdAt && transaction.createdAt.split('/')[2]

            let thisYear = moment(Date.now()).format('L').split('/')[2]

            if(transaction.transactionType === 'sold'
                && parseInt(year) === parseInt(thisYear) - 1
            ){
                transaction.productType === 'rice' ? (
                    totalRiceBagsCost = totalRiceBagsCost + parseInt(transaction.totalCost),
                    totalRiceBags = totalRiceBags + parseInt(transaction.quantity)
                ):
                transaction.productType === 'ciment' && (
                    totalCimentBagsCost = totalCimentBagsCost + parseInt(transaction.totalCost),
                    totalCimentBags = totalCimentBags + parseInt(transaction.quantity)  
                )
            }
            if(parseInt(year) === parseInt(thisYear) - 1
                && transaction.transactionType === 'sold'
                && transaction.bagSize === attributes.kg
                && transaction.productName === attributes.productName.toLowerCase()
            ){
                transaction.productType === 'rice'? (
                    totalRiceSoldBags = totalRiceSoldBags + parseInt(transaction.quantity),
                    totalRiceSoldBagsMoney = totalRiceSoldBagsMoney + parseInt(transaction.totalCost)
                ):
                transaction.productType === 'ciment' && (
                    totalCimentSoldBags = totalCimentSoldBags + parseInt(transaction.quantity),
                    totalCimentSoldBagsMoney = totalCimentSoldBagsMoney + parseInt(transaction.totalCost)
                )
            }
        })
    }
    console.log('Products, hhhh >>', allProducts)
    allProducts && allProducts.forEach(product => {
        product.productType === 'rice' ?
        allRemainingBags = allRemainingBags + parseInt(product.quantity):
        product.productType === 'ciment' ?
        totalCimentRemainingBags = totalCimentRemainingBags + parseInt(product.quantity): null

        if(product.productName === attributes.productName.toLowerCase()
            && product.bagSize === attributes.kg
        ){
            product.productType === 'rice' ?
            setRemainingRiceBagsBykg(product.quantity):
            product.productType === 'ciment' ?
            remainingCimentBagsBykg = product.quantity: null
        }
    })

    return (
        <div>
            <div className="content">
                <NavBar
                    navBar="side-bar"
                    homeTitle="side-bar__app-title"
                    navList="side-bar__link-list"
                    textDecoration="side-bar__text-decoration"
                    toggle={ toggle }
                />
                <div className="report-container">
                    <div className="filters">
                        <Input
                            classes="kg-input"
                            type="number"
                            placeholder="Enter bag size"
                            inputName="kg"
                            handleChanges={handleChanges}
                        />
                        <Input
                            classes="kg-input"
                            type="text"
                            placeholder="Enter product name"
                            inputName="productName"
                            handleChanges={handleChanges}
                        />
                        <div className='report-by-date'>
                            <div className="radio__group">
                                <input
                                    type='radio'
                                    name='period'
                                    value='today'
                                    checked={ attributes.period === 'today' }
                                    onChange={handleChanges}
                                    className="radio-style"
                                />
                                <label htmlFor="today">Today</label>
                            </div>

                            <div className="radio__group">
                                <input
                                    type='radio'
                                    name='period'
                                    value='yesterday'
                                    checked={ attributes.period === 'yesterday' }
                                    onChange={handleChanges}
                                    className="radio-style"
                                />
                                <label htmlFor="yesterday">Yesterday</label>
                            </div>

                            <div className="radio__group">
                                <input
                                    type='radio'
                                    name='period'
                                    value='month'
                                    checked={ attributes.period === 'month' }
                                    onChange={handleChanges}
                                    className="radio-style"
                                />
                                <label htmlFor="month">This Month</label>
                            </div>
   
                            <div className="radio__group">
                                <input
                                    type='radio'
                                    name='period'
                                    value='lastMonth'
                                    checked={ attributes.period === 'lastMonth' }
                                    onChange={handleChanges}
                                    className="radio-style"
                                />
                                <label htmlFor="month">Last Month</label>
                            </div>
                            <div className="radio__group">
                                <input
                                    type='radio'
                                    name='period'
                                    value='year'
                                    checked={ attributes.period === 'year' }
                                    onChange={handleChanges}
                                    className="radio-style"
                                />
                                <label htmlFor="month">This Year</label>
                            </div>
                            <div className="radio__group">
                                <input
                                    type='radio'
                                    name='period'
                                    value='lastYear'
                                    checked={ attributes.period === 'lastYear' }
                                    onChange={handleChanges}
                                    className="radio-style"
                                />
                                <label htmlFor="month">Last Year</label>
                            </div>
                        </div>
                        
                    </div>

                    <div className='report_cards'>
                        <ReportCards
                            totalRiceSoldBags={totalRiceSoldBags}
                            totalRiceSoldBagsMoney={totalRiceSoldBagsMoney}
                            attributes={attributes}
                            totalRiceBags={totalRiceBags}
                            totalRiceBagsCost={totalRiceBagsCost}
                            remainingRiceBagsBykg={remainingRiceBagsBykg}
                            allRemainingBags={allRemainingBags}
                            title='Rice'
                            productName={attributes.productName}
                        />

                        {/* <ReportCards
                            totalRiceSoldBags={totalCimentSoldBags}
                            totalRiceSoldBagsMoney={totalCimentSoldBagsMoney}
                            attributes={attributes}
                            totalRiceBags={totalCimentBags}
                            totalRiceBagsCost={totalCimentBagsCost}
                            remainingRiceBagsBykg={remainingCimentBagsBykg}
                            allRemainingBags={totalCimentRemainingBags}
                            title='Ciment'
                        /> */}
                    </div>
                    
                    {
                        (component==='sell') ?
                            <SellProduct
                                modal={modal}
                                toggle={ toggle }
                                closemodal={closemodal}
                                handleChanges={handleChanges}
                                attributes={attributes}
                                transactions={transactions}
                                setTransactions={setTransactions}
                            />
                        : (component==='addProduct') ?
                            <AddProduct
                                modal={modal}
                                toggle={toggle}
                                closemodal={closemodal}
                                handleChanges={handleChanges}
                                attributes={attributes}
                                setTransactions={setTransactions}
                                transactions={transactions}
                            />: null
                    }

                </div>
            </div>
        </div>
    );
};

StoreReport.propTypes = {
    
};

export default StoreReport;
