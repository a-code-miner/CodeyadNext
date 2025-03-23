import React from 'react';
import { useRouter } from 'next/router';

const Details = () => {
    const router = useRouter();
    // const productID = router.query.productID;
    const { productID } = router.query;
    return (
        <div>
            <h1>Product Details: {productID}</h1>
        </div>
    );
};

export default Details;
