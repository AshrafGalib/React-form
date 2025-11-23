import React from 'react';

const ProductTable = ({products,dltPrdct}) => {
    console.log(products)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                  {
                  products.map((product,index)=><tr key={index}>
                        <td>{index+1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td><button onClick={()=>dltPrdct(product)}>Delete</button></td>
                    </tr>)
                  }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;