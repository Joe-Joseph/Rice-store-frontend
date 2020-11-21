const updateProductOnSell = (newProducts, product, transactionType, quantity) => {
    if(transactionType === 'sold'){
        const index = newProducts && newProducts.getAllProducts.indexOf(product)
        product.quantity = parseInt(product.quantity) - parseInt(quantity)  
        newProducts.getAllProducts[index] = product
    }
    return newProducts
}

const updateProductOnAdd = (newProducts, product, transactionType, quantity) => {
    if(transactionType === 'added'){
        const index = newProducts && newProducts.getAllProducts.indexOf(product)
        product.quantity = parseInt(product.quantity) + parseInt(quantity)  
        newProducts.getAllProducts[index] = product
    }
    return newProducts
}

const updateProductOnDelete = (newProducts, product, transactionType, quantity) => {
    if(transactionType === 'added'){
        const index = newProducts && newProducts.getAllProducts.indexOf(product)
        product.quantity = parseInt(product.quantity) - parseInt(quantity)  
        newProducts.getAllProducts[index] = product
    }

    if(transactionType === 'sold'){
        const index = newProducts && newProducts.getAllProducts.indexOf(product)
        product.quantity = parseInt(product.quantity) + parseInt(quantity)  
        newProducts.getAllProducts[index] = product
    }
    return newProducts
}

export {updateProductOnSell, updateProductOnDelete, updateProductOnAdd}
