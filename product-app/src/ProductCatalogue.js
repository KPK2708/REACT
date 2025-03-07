import React, { useState, useEffect } from 'react';

const ProductCatalogue = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetching mock product data (replace with an API call in real app)
    const mockProducts = [
      { id: 1, name: 'Laptop', price: 1000, imageUrl: 'laptop.jpg', description: 'High-performance laptop' },
      { id: 2, name: 'Headphones', price: 200, imageUrl: 'headphones.jpg', description: 'Noise-canceling headphones' },
      { id: 3, name: 'Smartphone', price: 800, imageUrl: 'smartphone.jpg', description: 'Latest model smartphone' },
      { id: 4, name: 'Tablet', price: 600, imageUrl: 'tablet.jpg', description: 'Portable tablet' },
    ];
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  useEffect(() => {
    // Filtering products based on the search input
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [search, products]);

  return (
    <div className="product-catalogue">
      <h2>Product Catalogue</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product">
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductCatalogue;
