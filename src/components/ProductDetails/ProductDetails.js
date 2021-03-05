import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './ProductDetails.css'

const ProductDetails = () => {
    const {ProductsKey} = useParams()
    const product = fakeData.find( pd => pd.key === ProductsKey)
    // console.log(product)
    return (
        <div>
            <h1> {ProductsKey} details coming soon</h1>
            <Product handleAddBtn={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;