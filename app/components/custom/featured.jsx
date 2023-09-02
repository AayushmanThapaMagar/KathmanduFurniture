export default function FeaturedProducts({collection}) {
  const products = collection.collection.products.nodes;
  return (
    <div className="h-auto w-auto">
      <h1 className="align-self-center text-center">
        {collection.collection.title}
      </h1>
      <div className="flex flex-wrap content-center justify-center h-auto w-auto">
        {products.map((product) => (
          <a key={product.id} href={`/products/${product.handle}`}>
            <div
              className="
            bg-cover bg-center h-96 w-96 bg-gray-100
            m-4 hover:scale-105 hover:shadow-lg transition duration-500 ease-in-out rounded-md"
            >
              <h2>{product.title}</h2>
              <p>
                Price: {product.variants.nodes[0].price.amount}{' '}
                {product.variants.nodes[0].price.currencyCode}
              </p>
              <img
                className="obejct-cover object-fill overflow-clip hover:scale-110 hover:shadow-xl duration-700"
                src={product.variants.nodes[0].image.url}
                alt={product.title}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
