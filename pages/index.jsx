import React from 'react';
import Link from 'next/link';

const Index = () => {
	return (
		<div>
			<h1>Main Page</h1>
			<Link href={'/about'}>About</Link>
			<br />
			<Link href={'/products'}>Products</Link>
			<br />
			<Link href={'/houses'}>Houses</Link>
			<br />
			<Link href={'/houses'} replace>Houses with replace</Link>
			<br />
		</div>
	);
};

export default Index;
