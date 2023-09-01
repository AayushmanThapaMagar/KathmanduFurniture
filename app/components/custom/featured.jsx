export default function FeaturedProducts({collection}) {
    const products = collection.collection.products.nodes;
    return (
      <div className='featured-products'>
        <h1>{collection.collection.title}</h1>
        {products.map((product)=>(
          <a
          key= {product.id}
          href={`/products/${product.handle}`}
          >
            <img src={product.variants.nodes[0].image.url} alt={product.title}/>
            <h2>{product.title}</h2>
            <p>Price: {product.variants.nodes[0].price.amount} {product.variants.nodes[0].price.currencyCode}</p>
          </a>
        ))}
  
      </div>
    )
  }