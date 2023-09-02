import {defer} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import Hero from '~/components/custom/hero';
import FeaturedProducts from '~/components/custom/featured';

export const meta = () => {
  return [
    {title: 'Kathmandu Furniture | Home'},
    {description: 'Buy Premium Furniture Online'},
  ];
};

export async function loader({context}) {
  const {storefront} = context;
  const featuredCollection = await storefront.query(FEATURED_COLLECTION_QUERY);
  const recommendedProducts = 'test';

  return defer({featuredCollection, recommendedProducts});
}

export default function Homepage() {
  const data = useLoaderData();
  return (
    <div className="home">
      <Hero />
      <FeaturedProducts collection={data.featuredCollection} />
    </div>
  );
}

const FEATURED_COLLECTION_QUERY = ` #graphql
query {
  collection (handle:"featured-product") {
    title,
    products (first: 10) {
      nodes {
        
        title,
        id,
        handle,
        variants (first: 1) {
          nodes {
            image {
              url
            }
            price {
              currencyCode,
              amount
            }
          }
        }
      }
    }
  }
}
`;
