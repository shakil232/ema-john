import React from 'react';
import './ReviewItems.css'

const ReviewItems = (props) => {
    const {img , name , quantity, price, key} = props.item
    return (
        <div className="product-container item">
            <div>
            <img src={img} alt=""/>
            </div>

            <div className="order-review">
             <h3>{name}</h3>
            <p>Quantity: {quantity}</p>
            <p><small>${price}</small></p>
            <button className="buttons"
            onClick={()=>props.removeProduct(key)}
            >
              Remove</button>
            </div>

        </div>
    );
};

export default ReviewItems;