'use client';

import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import type { CartContextType } from './CartContext'; // ✅ import the type
import { toast } from 'sonner';

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useContext(CartContext) as CartContextType; // ✅ fix: type assertion

  const handleAdd = () => {
    addToCart(product, 1);
    toast.success('✅ Added to cart!');
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '1rem',
        width: '220px',
        textAlign: 'center',
        background: 'white',
      }}
    >
      <Link href={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} width={180} height={180} />
        <h3>{product.name}</h3>
        <p>₹{product.price}</p>
      </Link>
      <button
        onClick={handleAdd}
        style={{
          marginTop: '0.5rem',
          background: '#0070f3',
          color: 'white',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '6px',
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
