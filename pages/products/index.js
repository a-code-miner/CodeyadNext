import React from 'react';
import Link from 'next/link';

const Index = () => {
    return (
        <div>
            <h1>Products Page</h1>
            <Link href={{
                pathname: '/products/1',
                query: {id: 1}
            }}>Product1</Link>
            <br/>
            <Link href={{
                pathname: '/products/2',
                query: {id: 2}
            }}>Product2</Link>
            <br/>
            <Link href={{
                pathname: '/products/2',
                query: {id: 2}
            }} replace>Product2 with replace</Link>
            <br/>
            <Link href={{
                pathname: '/products/3',
                query: {id: 3}
            }}>Product3</Link>
            <br/>
            <Link href={{
                pathname: '/products/4',
                query: {id: 4}
            }}>Product4</Link>
            <br/>
        </div>
    );
};

export default Index;
