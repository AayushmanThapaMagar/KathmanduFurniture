import { CartForm } from '@shopify/hydrogen';
import { PiShoppingCartSimpleFill } from 'react-icons/pi';

export default function ProductCard({ variant, variantUrl, loading, product, availableForSale }) {
    return (
        <div>
            {/* div containing the product cards */}
            <div className="w-[10.5rem] h-[16rem] md:w-[15.25rem] md:h-[22rem] lg:w-[20rem] lg:h-[27rem]  flex flex-row flex-nowrap overflow-y-auto lg:overflow-clip gap-x-5">
                <div className="group bg-gray-100 transition duration-300 ease-in-out rounded-md overflow-clip shrink-0 grow-0 lg:scale-105 hover:text-decoration-none h-full w-full">
                    {/* a tag inside */}
                    <div>
                        <a
                            href={variantUrl}
                            className="hover:no-underline"
                        >
                            <img
                                className="aspect-square h-auto w-auto object-fill overflow-clip group-hover:scale-110 duration-500 mb-2"
                                src={product.featuredImage.url}
                                alt={product.title}
                            />

                            
                                {/* <div className='font-semibold'>{product.title}</div> */}
                                <div className='pl-1 break-all lg:pl-4'>

                                    {variant.compareAtPrice ?
                                        (
                                            <div className='mb-3'>
                                                <div className='text-xs font-semibold bg-red-500 lg:w-1/6 w-1/4 text-center rounded-lg text-white mt-2'>SALE</div>
                                                <div className='font-semibold'>{product.title}</div>
                                                <div className='flex flex-row gap-x-1'>
                                                    <p>{variant.price.currencyCode}{' '}
                                                        {variant.price.amount}{' '}</p>

                                                    <p className='line-through text-gray-400'>{variant.compareAtPrice.amount}</p>
                                                </div>
                                            </div>

                                        ) : (
                                            <>
                                                <div className='text-xs font-semibold bg-red-transparent w-1/6 text-center rounded-lg text-white my-1 py-1'></div>
                                                <div className='font-semibold pb-2'>{product.title}</div>
                                                <p>{variant.price.currencyCode}{' '}
                                                    {variant.price.amount}{' '}</p>
                                            </>
                                        )
                                    }
                                </div>
                           
                        </a>
                    </div>
                    <div className="lg:opactiy-0 lg:group-hover:opacity-100 transition absolute top-2 right-2 p-2 duration-500 ">
                        <AddToCartButton
                            disabled={!availableForSale}
                            onClick={() => {
                                window.location.href = window.location.href + '#cart-aside';
                            }}
                            lines={
                                variant
                                    ? [
                                        {
                                            merchandiseId: variant.id,
                                            quantity: 1,
                                        },
                                    ]
                                    : []
                            }
                        >
                            {availableForSale ? (
                                <PiShoppingCartSimpleFill className="hover:scale-105 w-7 h-7 lg:opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500" />
                            ) : (
                                'Sold out'
                            )}
                        </AddToCartButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AddToCartButton({ analytics, children, disabled, lines, onClick }) {
    return (
        <CartForm route="/cart" inputs={{ lines }} action={CartForm.ACTIONS.LinesAdd}>
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
