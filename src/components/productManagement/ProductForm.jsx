import React, { useState } from 'react';

const ProductForm = ({handleSetProducts}) => {
    const[error,setError]=useState('')
    const handleSubmit =(e)=>{
        e.preventDefault()
      const name =e.target.name.value
      const price =e.target.price.value
      const quantity =e.target.quantity.value
      //console.log(name,price,quantity)

      if(name.length===0){
     setError('Please provide a Product Name.')
     return;
      }
      else if(price<=0){
        setError('Please provide Price.')
        return;
      }
      else if(quantity<=0){
        setError('Please provide Quantity.')
        return;
      }
      else{
        setError('')
      }
      const product ={
        name,
        price,
        quantity
      }
      //console.log(product)
      handleSetProducts(product)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder='Product Name' />
            <br/>
            <input type="text" name="price" placeholder='Product Price' />
            <br/>
            <input type="text" name="quantity" placeholder='Product Quantity'/>
            <br/>
            <input type="submit" value="Submit" />
            </form>
            <p style={{color:'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;