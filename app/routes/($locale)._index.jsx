import { defer } from '@shopify/remix-oxygen';
import { Await, useLoaderData, Link } from '@remix-run/react';
import { Suspense } from 'react';
import { Image, Money } from '@shopify/hydrogen';
import Hero from '~/components/custom/hero';
import FeaturedProducts from '~/components/custom/featured';
import Collections from "~/components/custom/collections";
import Stats from "~/components/custom/stats";
import AboutSection from "~/components/custom/about/about";

export const meta = () => {
  return [
    { title: 'Kathmandu Furniture | Home' },
    { description: 'Buy Premium Furniture Online' },
  ];
};

export async function loader({ context }) {
  const { storefront } = context;
  const specialOffers = await storefront.query(SPECIAL_OFFERS_QUERY);
  const viewCollections = await storefront.query(INDEX_COLLECTIONS_QUERY);

  return defer({ specialOffers, viewCollections });
}

export default function Homepage() {
  const data = useLoaderData();
  return (
    <div className="home">
      <Hero />
      <AboutSection />
      
      <a name="FeaturedProducts" className='hover:no-underline hover:cursor-auto'> 
      <Stats />
      </a>
      <FeaturedProducts collection={data.specialOffers} />
      <Collections getData={data.viewCollections} />
      
    </div>
  );
}

const SPECIAL_OFFERS_QUERY = ` #graphql
query {
  collection (handle:"special-offers") {
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
            compareAtPrice {
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