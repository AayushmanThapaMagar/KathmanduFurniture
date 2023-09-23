import {CartForm} from '@shopify/hydrogen';
import {PiShoppingCartSimpleFill} from 'react-icons/pi';

export default function FeaturedProducts({collection}) {
  const products = collection.collection.products.nodes;
  return (
    <div>
      <a name="FeaturedProducts" />
      <h1 className="align-self-center text-center">
        {collection.collection.title}
      </h1>

      {/* div containing the product cards */}
      <div className=" flex flex-row flex-nowrap lg:content-center lg:justify-center lg:gap-x-5 gap-y-5 overflow-y-auto gap-x-5">
        {products.map((product) => (
          // the product card
          <div className="lg:m-5 group bg-gray-100 transition duration-300 ease-in-out rounded-md overflow-hidden flex-shrink-0 lg:scale-105 hover:text-decoration-none">
            {/* a tag inside */}
            <div>
              <a
                href={`/products/${product.handle}`}
                className="hover:no-underline"
              >
                <img
                  className="lg:h-96 lg:w-96 w-64 h-64 object-fill overflow-clip group-hover:scale-110 duration-500"
                  src={product.variants.nodes[0].image.url}
                  alt={product.title}
                />

                <div className="px-4 pb-4">
                  <div className='font-semibold'>{product.title}</div>
                  {/* {product.availableForSale ? <p>Available</p> : <p>Sold Out</p>} */}
                  <div>
                    {product.variants.nodes[0].price.currencyCode}{' '}
                    {product.variants.nodes[0].price.amount}{' '}
                  </div>
                </div>
              </a>
            </div>
            <div className="lg:opactiy-0 group-hover:opacity-100 transition absolute top-2 right-2 p-2 duration-500 opacity-100">
              <AddToCartButton
                disabled={!product.availableForSale}
                onClick={() => {
                  window.location.href = window.location.href + '#cart-aside';
                }}
                lines={
                  product.variants.nodes[0]
                    ? [
                        {
                          merchandiseId: product.variants.nodes[0].id,
                          quantity: 1,
                        },
                      ]
                    : []
                }
              >
                {product.availableForSale ? (
                  <PiShoppingCartSimpleFill className="hover:scale-105 w-7 h-7 lg:opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500" />
                ) : (
                  'Sold out'
                )}
              </AddToCartButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AddToCartButton({analytics, children, disabled, lines, onClick}) {
  return (
    <CartForm route="/cart" inputs={{lines}} action={CartForm.ACTIONS.LinesAdd}>
      {(fetcher) => (
        <>
          <input
            name="analytics"
            type="hidden"
            value={JSON.stringify(analytics)}
          />
          <button
            type="submit"
            onClick={onClick}
            disabled={disabled ?? fetcher.state !== 'idle'}
          >
            {children}
          </button>
        </>
      )}
    </CartForm>
  );
}
