
import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Review.css'
import happyImage from '../../images/giphy.gif'

const Review = () => {
   const [cart , setCart ]= useState ([]);
   const [ placeOrder , setPlaceOrder] = useState(false)
   const handelPlaceOrder =()=>{
      setCart([])
      setPlaceOrder(true)
      processOrder();

   }
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

   let thankYou;
   if(placeOrder){
    thankYou = <img src={happyImage} alt=""/>
   }
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
          { thankYou}
          <div className="Cart-container">
              <Cart cart={cart}>
                  <button 
                  className="buttons"
                  onClick={handelPlaceOrder }
                  > 
                  order place</button>
              </Cart>
          </div>
        </div>
    );
};

export default Review;