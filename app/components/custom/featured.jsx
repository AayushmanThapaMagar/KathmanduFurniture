import {CartForm} from '@shopify/hydrogen';
import {PiShoppingCartSimpleFill} from 'react-icons/pi';

export default function FeaturedProducts({collection}) {
  const products = collection.collection.products.nodes;
  return (
    <div>
      <h1 className="align-self-center text-center">
        {collection.collection.title}
      </h1>

      {/* div containing the product cards */}
      <div className=" flex flex-row flex-nowrap lg:content-center lg:justify-center lg:gap-x-5 gap-y-5 overflow-y-auto gap-x-5">
        {products.map((product) => (
          // the product card
          <div className="lg:m-5 group bg-gray-100 transition duration-300 ease-in-out rounded-md overflow-hidden shrink-0 lg:scale-105 hover:text-decoration-none">
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
                  {/* <div className='font-semibold'>{product.title}</div> */}
                  <div>

                    {product.variants.nodes[0].compareAtPrice ? 
                  (
                    <div className='mb-3'>
                    <div className='text-xs font-semibold bg-red-500 w-1/6 text-center rounded-lg text-white py-1'>SALE</div>
                    <div className='font-semibold'>{product.title}</div>
                    <div className='flex flex-row gap-x-1'>
                    <p>{product.variants.nodes[0].price.currencyCode}{' '}
                    {product.variants.nodes[0].price.amount}{' '}</p>
                
                    <p className='line-through text-gray-400'>{product.variants.nodes[0].compareAtPrice.amount}</p>
                    </div>
                    </div>
                    
                  ) : (
                    <>
                    <div className='text-xs font-semibold bg-red-transparent w-1/6 text-center rounded-lg text-white my-1 py-1'></div>
                    <div className='font-semibold'>{product.title}</div>
                    <p>{product.variants.nodes[0].price.currencyCode}{' '}
                    {product.variants.nodes[0].price.amount}{' '}</p>
                    </>
                  )  
                  }
                  </div>
                </div>
              </a>
            </div>
            <div className="lg:opactiy-0 lg:group-hover:opacity-100 transition absolute top-2 right-2 p-2 duration-500 ">
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
