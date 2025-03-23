import React from 'react';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter();
    // const productID = router.query.productID;
    console.log(router.query);
    const { productID } = router.query;

    const handlePushToDetails = () => {
        // some action ....
        // according to response...
        // relative address. example: localhost:3000/products/1/details
        router.push(`${productID}/details`);

        // for backward, we use router.back() method.

        // absolute address. example: localhost:3000/1/details
        // router.push(`/${productID}/details`);
    };

    return (
        <div>
            <h1>Product {productID}</h1>
            <div>
                <button onClick={handlePushToDetails}>
                    Product {productID} details
                </button>
            </div>
        </div>
    );
};

export default Index;
