import React from 'react';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter();
    // const productID = router.query.productID;
    const { productID } = router.query;
    return (
        <div>
            <h1>Product {productID}</h1>
            <h1>{productID}</h1>
        </div>
    );
};

export default Index;
