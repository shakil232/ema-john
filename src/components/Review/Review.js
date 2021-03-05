
import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Review.css'

const Review = () => {
   const [cart , setCart ]= useState ([]);
   
    const removeProduct = (productKey) =>{
        const newCart = cart.filter( pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey)
    }

   useEffect( () => {
       const saveData = getDatabaseCart();
       const productKeys = Object.keys(saveData);
       const sameProduct = productKeys.map( key => {
           const product = fakeData.find(pd => pd.key === key);
           product.quantity = saveData[key]
           return product
       })
       setCart(sameProduct)
   },[])
    return (
        <div className="review-container">
           
          <div className="item-container">
          {
                cart.map( item => <ReviewItems 
                    item={item}
                    removeProduct={removeProduct}
                    key={item.key}
                    >
                </ReviewItems>)
            }
          </div>
          <div className="Cart-container">
              <Cart cart={cart}></Cart>
          </div>
        </div>
    );
};

export default Review;