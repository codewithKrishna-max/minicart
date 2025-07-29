'use client';

import { useContext, useState } from 'react';
import { CartContext } from '../components/CartContext';
import type { CartContextType } from '../components/CartContext';

export default function CheckoutPage() {
  const cartContext = useContext(CartContext) as CartContextType;
  const { cart } = cartContext;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const subtotal = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Please enter all required fields');
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Thank you, {name}!</h2>
        <p className="mb-4">Your order has been placed. 📦</p>
        <p className="text-lg font-semibold">Total: ₹{total.toFixed(2)}</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Name*</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-medium">Email*</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-1">Order Summary:</h3>
          <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
          <p>Tax (5%): ₹{tax.toFixed(2)}</p>
          <p className="font-bold text-lg">Total: ₹{total.toFixed(2)}</p>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded mt-4"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
