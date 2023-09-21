import { defer } from '@shopify/remix-oxygen';
import { Await, useLoaderData, Link } from '@remix-run/react';
import { Suspense } from 'react';
import { Image, Money } from '@shopify/hydrogen';
import Hero from '~/components/custom/hero';
import FeaturedProducts from '~/components/custom/featured';
import Collections from "~/components/custom/collections";
import Stats from "~/components/custom/stats";
import About from "~/components/custom/aboutus";

export const meta = () => {
  return [
    { title: 'Kathmandu Furniture | Home' },
    { description: 'Buy Premium Furniture Online' },
  ];
};

export async function loader({ context }) {
  const { storefront } = context;
  const featuredCollection = await storefront.query(FEATURED_COLLECTION_QUERY);
  const viewCollections = await storefront.query(INDEX_COLLECTIONS_QUERY);

  return defer({ featuredCollection, viewCollections });
}

export default function Homepage() {
  const data = useLoaderData();
  return (
    <div className="home">
      <Hero />
      <About />
      <a name="FeaturedProducts" />
      <FeaturedProducts collection={data.featuredCollection} />
      <Collections getData={data.viewCollections} />
      <Stats />
      
    </div>
  );
}

const FEATURED_COLLECTION_QUERY = ` #graphql
query {
  collection (handle:"featured-product") {
    title,
    products (first: 10) {
      nodes {
        availableForSale,
        title,
        id,
        handle,
        variants (first: 10) {
          nodes {
            id,
            
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

const INDEX_COLLECTIONS_QUERY = ` #graphql
query {
  collections(first:10, reverse:true) {
    nodes {
      title,
      handle
      image {
        url
      }
    }
  }
}
`