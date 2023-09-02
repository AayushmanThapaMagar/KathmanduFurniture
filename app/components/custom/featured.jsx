export default function FeaturedProducts({collection}) {
  const products = collection.collection.products.nodes;
  return (
    <div className="pb-10">
      <h1 className="align-self-center text-center">
        {collection.collection.title}
      </h1>

      {/* div containing the product cards */}
      <div className="flex flex-wrap content-center justify-center gap-x-4 ">
        {products.map((product) => (
          // the product card
          <div className="group bg-gray-100 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out rounded-md overflow-hidden">
            {/* a tag inside */}
            <a href={`/products/${product.handle}`}>
              <img
                className=" h-96 w-96 object-fill overflow-clip hover:scale-110 duration-500"
                src={product.variants.nodes[0].image.url}
                alt={product.title}
              />

              <div
              className="px-4 pb-4"
              >
                <h2>{product.title}</h2>
                <p>
                  {product.variants.nodes[0].price.currencyCode}{' '}
                  {product.variants.nodes[0].price.amount}{' '}
                </p>
              </div>
            </a>
            <button className="opactiy-0 group-hover:opacity-100 transition absolute top-2 right-2 p-2 duration-500">
              add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
