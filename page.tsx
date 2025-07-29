'use client';

import ProductList from './components/ProductList';
import CartModal from './components/CartModal';

export default function HomePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#0070f3',
        marginBottom: '1rem'
      }}>
        🛍️ MiniCart Shop
      </h1>

      {/* Floating cart icon + modal */}
      <CartModal />

      {/* Product list */}
      <ProductList />
    </div>
  );
}
