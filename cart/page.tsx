'use client';

import { useContext } from 'react';
import { CartContext } from '../components/CartContext';
import type { CartContextType } from '../components/CartContext';

export default function CartPage() {
  const cartContext = useContext(CartContext) as CartContextType;
  const { cart, increaseQty, decreaseQty, removeItem } = cartContext;

  const subtotal = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  if (cart.length === 0) {
    return (
      <p className="text-center mt-10 text-lg font-semibold">
        Your cart is empty.
      </p>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b py-4"
        >
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p>₹{item.price} × {item.quantity}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                −
              </button>
              <button
                onClick={() => increaseQty(item.id)}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                +
              </button>
              <button
                onClick={() => removeItem(item.id)}
                className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          </div>

          <p className="font-semibold">
            ₹{(item.price * (item.quantity || 1)).toFixed(2)}
          </p>
        </div>
      ))}

      <div className="text-right mt-6">
        <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
        <p>Tax (5%): ₹{tax.toFixed(2)}</p>
        <p className="text-xl font-bold">Total: ₹{total.toFixed(2)}</p>

        <a
          href="/checkout"
          className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded"
        >
          Proceed to Checkout
        </a>
      </div>
    </div>
  );
}
