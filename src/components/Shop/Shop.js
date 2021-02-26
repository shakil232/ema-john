import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const TenItems = fakeData.slice(0, 10);
    const [products, setProducts] = useState(TenItems)
    return (
        <div className='product-container'>
            <div className="Shop-container">
                {
                    products.map(pd => <Product product={pd}></Product>)
                }
            </div>
            <div className="Cart-container">
                <h2>This is Card</h2>
            </div>

        </div>
    );
};

export default Shop;