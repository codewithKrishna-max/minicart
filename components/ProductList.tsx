'use client';

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import type { Product } from './CartContext'; // ✅ use correct type

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]); // ✅ typed array

  useEffect(() => {
    fetch('/mock-products.json')
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data));
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'center',
        marginTop: '2rem',
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
