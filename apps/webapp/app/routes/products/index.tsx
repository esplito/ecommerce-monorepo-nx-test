import { useEffect, useRef } from 'react';
import type { LinksFunction, LoaderFunction, MetaFunction } from 'remix';

import { useActionData, useLoaderData, redirect, Link } from 'remix';

import stylesUrl from '~/styles/products/index.css';

export type FakeProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

// Provide meta tags for this page.
// - https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return { title: 'Products' };
};

// Provide stylesheet for this page.
// - https://remix.run/api/conventions#links
export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

// Use this function to provide data for the route.
// - https://remix.run/api/conventions#loader
export const loader: LoaderFunction = async () => {
  const response = await fetch('https://fakestoreapi.com/products?limit=5');
  return response.json();
};

export default function Products() {
  const data: FakeProduct[] = useLoaderData();
  return (
    <div>
      <h1>Products</h1>
      <div className="product-listings">
        {data.map((product) => (
          <Link to={`${product.id}`}>
            <div className="product-view">
              <div className="product-image-holder">
                <img src={product.image} width={200} height={200} />
              </div>
              <h3 className="product-title">{product.title}</h3>
              <p>{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
