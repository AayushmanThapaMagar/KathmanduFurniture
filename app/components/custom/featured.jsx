import {CartForm} from '@shopify/hydrogen';
import {PiShoppingCartSimpleFill} from "react-icons/pi"

export default function FeaturedProducts({collection}) {
  const products = collection.collection.products.nodes;
  return (
    <div className="pb-10">
      <h1 className="align-self-center text-center">
        {collection.collection.title}
      </h1>

      {/* div containing the product cards */}
      <div className="flex flex-wrap content-center justify-center gap-x-5 gap-y-5tea">
        {products.map((product) => (
          // the product card
          <div className="m-5 group bg-gray-100 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out rounded-md overflow-hidden">
            {/* a tag inside */}
            <a href={`/products/${product.handle}`}>
              <img
                className=" h-80 w-80 object-fill overflow-clip hover:scale-110 duration-500"
                src={product.variants.nodes[0].image.url}
                alt={product.title}
              />

              <div className="px-4 pb-4">
                <h2>{product.title}</h2>
                {product.availableForSale ? <p>Available</p> : <p>Sold Out</p>}
                <p>
                  {product.variants.nodes[0].price.currencyCode}{' '}
                  {product.variants.nodes[0].price.amount}{' '}
                </p>
              </div>
            </a>
            <div className="opactiy-0 group-hover:opacity-100 transition absolute top-2 right-2 p-2 duration-500">
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
                {product.availableForSale ? 
                <PiShoppingCartSimpleFill className="hover:scale-105 w-7 h-7" />
                : 'Sold out'}
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
