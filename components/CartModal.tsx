'use client';

import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CartContext } from './CartContext';
import type { CartContextType } from './CartContext'; // ✅ type import

export default function CartModal() {
  const { cart, increaseQty, decreaseQty, removeItem } = useContext(CartContext) as CartContextType; // ✅ typed context
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 999 }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: '#0070f3',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          fontWeight: 'bold',
        }}
      >
        🛒 Cart ({cart.length})
      </button>

      {isOpen && (
        <div
          style={{
            background: '#0070f3',
            color: 'white',
            marginTop: '0.5rem',
            borderRadius: '10px',
            padding: '1rem',
            width: '300px',
            boxShadow: '0 0 12px rgba(0,0,0,0.2)',
          }}
        >
          <div style={{ textAlign: 'right' }}>
            <button onClick={() => setIsOpen(false)} style={{ color: 'white' }}>
              ❌
            </button>
          </div>

          <h3 style={{ marginBottom: '1rem' }}>Your Cart</h3>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} style={{ marginBottom: '1rem' }}>
                  <strong>{item.name}</strong>
                  <p>₹{item.price} × {item.quantity}</p>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button onClick={() => decreaseQty(item.id)}>➖</button>
                    <button onClick={() => increaseQty(item.id)}>➕</button>
                    <button onClick={() => removeItem(item.id)}>❌</button>
                  </div>
                </div>
              ))}
              <p><strong>Total: ₹{subtotal.toFixed(2)}</strong></p>
              <button
                onClick={() => {
                  setIsOpen(false);
                  router.push('/checkout');
                }}
                style={{
                  background: 'white',
                  color: '#0070f3',
                  borderRadius: '6px',
                  padding: '0.5rem 1rem',
                  marginTop: '1rem',
                  fontWeight: 'bold',
                  width: '100%',
                }}
              >
                Checkout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
