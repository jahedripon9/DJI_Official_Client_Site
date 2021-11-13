import React, { useEffect, useState } from 'react';
import DJIProducts from '../DJIProducts/DJIProducts';
import Header from '../Shared/Header/Header';


const ExploreProduct = () => {
    const [products, setProducts]= useState([])
    useEffect(()=>{
        fetch('https://limitless-crag-70753.herokuapp.com/djiproducts')
        .then(rse => rse.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div class="container mx-auto px-4">
            <Header></Header>
  
                {
                    products.map(product => <DJIProducts
                    key={product.id}
                    product={product}
                    ></DJIProducts>)
                }

        </div>
    );
};

export default ExploreProduct;