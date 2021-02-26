import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const TenItems = fakeData.slice(0, 10);
    const [products, setProducts] = useState(TenItems);

   const [ cart , setCart ] = useState([]);
   const handelAddProduct = (product) =>{
       
       const NewCount = [ ...cart , product];
       setCart(NewCount)
       
   }
    return (
        
        <div className='product-container'>
            <div className="Shop-container">
                {
                    products.map(pd => <Product 
                        handelAddProduct={handelAddProduct}
                        product={pd} 
                    ></Product>)
                }
            </div>
            <div className="Cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;