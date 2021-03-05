import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';

import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const TenItems = fakeData.slice(0, 10);
    const [products, setProducts] = useState(TenItems);
    const [ cart , setCart ] = useState([]);
  
     useEffect(()=>{
        const saveData = getDatabaseCart();
        const productKey = Object.keys(saveData);
        const previousCart = productKey .map( pdKey => {
            const product = fakeData.find(pd => pd.key === pdKey);
            product.quantity = saveData[pdKey]
            return product
        })
        setCart(previousCart)     
     },[])

    const handelAddProduct = (product) =>{
    const toBeAdded = product.key
    const sameProduct = cart.find( pd=> pd.key === toBeAdded);
    let count = 1;
    let NewCount;
    if( sameProduct){
      count = sameProduct.quantity + 1 ;
      sameProduct.quantity = count ;
      const others = cart.filter(pd => pd.key !== toBeAdded)
      NewCount = [ ...others , sameProduct]
    }
    else{
        product.quantity = 1;
        NewCount = [ ...cart , product ]
    }
    setCart(NewCount)
    addToDatabaseCart(product.key ,count)
       
   }
    return (
        
        <div className='product-container'>
            <div className="Shop-container">
                {
                    products.map(pd => <Product 
                        handleAddBtn={true}
                        handelAddProduct={handelAddProduct}
                        product={pd} 
                        key={pd.key}
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