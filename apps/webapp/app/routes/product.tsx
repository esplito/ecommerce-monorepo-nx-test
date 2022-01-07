import { useEffect, useRef } from 'react';
import type { LinksFunction, LoaderFunction, MetaFunction } from 'remix';

import { useActionData, useLoaderData, redirect } from 'remix';

import stylesUrl from '~/styles/product.css';

// Provide meta tags for this page.
// - https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return { title: 'AppsWebappAppRoutesProduct' };
};

// Provide stylesheet for this page.
// - https://remix.run/api/conventions#links
export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

// Use this function to provide data for the route.
// - https://remix.run/api/conventions#loader
export const loader: LoaderFunction = async () => {
  return {
    message: 'Hello, world!',
  };
};

export default function AppsWebappAppRoutesProduct() {
  const data = useLoaderData();
  return <p>Message: {data.message}</p>;
}
