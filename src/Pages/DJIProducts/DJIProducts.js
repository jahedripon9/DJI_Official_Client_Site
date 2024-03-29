import React, { useEffect, useState } from 'react';
import DJIProduct from '../DJIProduct/DJIProduct';

const DJIProducts = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://dji-server.vercel.app/djiproducts')
            .then(rse => rse.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className="container mx-auto px-4">
            <section className="text-gray-600 body-font ">
                <div className="text-center my-10">
                    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Mavic Series</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Capture stunning imagery with a legendary Hasselblad camera and enjoy smooth flight with omnidirectional obstacle sensing. Every improvement on Mavic 3 sets a higher standard for aerial photography.</p>
                </div>
                <div className='item-container'>
                    {
                        products.slice(0, 6).map(product => <DJIProduct
                            key={product._id}
                            product={product}
                        ></DJIProduct>)
                    }
                </div>
            </section>
        </div>
    );
};

export default DJIProducts;