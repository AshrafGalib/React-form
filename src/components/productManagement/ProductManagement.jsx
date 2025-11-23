import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {

    const[products,setProducts]=useState([])
 
    //setproducts
 const handleSetProducts =(newProduct)=>{
   const newProducts=[...products,newProduct]
   setProducts(newProducts)
   
 }
 //deleteproducts
 const dltPrdct=(dletedProduct)=>{
   const productsAftrDlt = products.filter(product=>product!==dletedProduct)
   setProducts(productsAftrDlt)
 }

    return (
        <div>
            <h3>Add products.</h3>
            <ProductForm handleSetProducts={handleSetProducts}></ProductForm>
            <h3>Products: {products.length} </h3>
            <ProductTable dltPrdct={dltPrdct} products={products}></ProductTable>
            
        </div>
    );
};

export default ProductManagement;