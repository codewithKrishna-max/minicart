'use client';

import './globals.css';
import { CartProvider } from './components/CartContext';
import { Toaster } from 'sonner';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
          <Toaster position="bottom-center" richColors closeButton />
        </CartProvider>
      </body>
    </html>
  );
}
