
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
   
    const { img, name, seller, price, stock  } = props.product;
    return (
        <div className='product'>

            <div className="img-container">
                <img src={img} alt="" />

            </div>

            <div className="details-container">
                <h2 className="product-name"> {name} </h2>           
                <p><small> by: {seller}</small></p>             
                <p> ${price}</p>               
                <p><small> only {stock} left in stock - order soon</small></p>
                <button 
                className="buttons"
                onClick={()=> props.handelAddProduct(props.product)}
                > 
                    <FontAwesomeIcon icon={faCartArrowDown} /> add to cart 
                </button>
            </div>

        </div>
    );
};

export default Product;