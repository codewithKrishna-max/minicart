'use client';
import { toast } from 'sonner'; 
import { useEffect, useState, useContext } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { CartContext } from '../../components/CartContext';
import type { Product, CartContextType } from '../../components/CartContext';

export default function ProductDetails() {
  const { id } = useParams();
  const router = useRouter();
  const cartContext = useContext(CartContext) as CartContextType;
  const { addToCart } = cartContext;

  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    fetch('/mock-products.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item: Product) => item.id === Number(id));
        setProduct(found);
      });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const specList = product?.specs?.length ? (
    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
      {product.specs.map((spec, i) => (
        <li key={i}>{spec}</li>
      ))}
    </ul>
  ) : (
    <p>No specifications available.</p>
  );

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <img src={product.image} alt={product.name} width="400" />
      <p><strong>₹{product.price}</strong></p>

      <div className="mt-3">
        <label className="font-medium mr-2">Quantity:</label>
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          style={{ width: '60px', padding: '0.3rem' }}
        />
      </div>

      <p className="mt-4 font-semibold">Specifications:</p>
      {specList}

      <button
       onClick={() => {
  addToCart(product, quantity);
  toast.success(
    <div className="flex items-center justify-between gap-4">
      <span>✅ Added to cart!</span>
      <button
        onClick={() => toast.dismiss()}
        className="text-white px-2 text-sm rounded hover:opacity-75"
      >
        ×
      </button>
    </div>,
    { duration: 10000 } // stays longer for manual dismiss
  );
  router.push('/checkout');
}}

        style={{
          background: 'blue',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '6px',
          marginTop: '1.5rem',
        }}
      >
        Buy Now
      </button>
    </div>
  );
}
