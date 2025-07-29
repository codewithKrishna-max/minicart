_MiniCart – A Simple Shopping Cart App_
This is a responsive e-commerce MiniCart application built using Next.js (App Router). It allows users to browse products, view details, add items to a cart, manage quantities, and complete a checkout — all without needing a backend.
Project Purpose
The purpose of this project is to demonstrate core React/Next.js concepts including:
- Routing and dynamic pages
- Context API for global state management
- State persistence via localStorage
- Component-based architecture
- User experience with real-time cart updates and toast feedback
**Features**
- Home page displaying a list of products
- **Product detail page with**:
  - Product image, name, price
  - Specification list
  - Quantity selector
  - Buy Now → goes to checkout
- “Add to Cart” button with toast notification
- **Cart modal:**
  - Increment/decrement item quantity
  - Remove item from cart
  - View subtotal and tax
  - Checkout button
- **Checkout page with:**
  - Order summary
  - Basic user details form
  - Confirmation layout
- Cart state saved using localStorage
- Notifications using sonner
- Blue-themed, responsive layout
**folder Structure**
/app
  ├── layout.tsx                
  ├── page.tsx                  
  ├── cart/page.tsx             
  └── product/[id]/page.tsx     

/components
  ├── CartContext.tsx           
  ├── CartModal.tsx             
  ├── ProductCard.tsx           
  └── ProductList.tsx        

/public
  └── mock-products.json        

/globals.css                    
**Tech Stack**
- Next.js (App Router)
- React (Client Components)
- TypeScript
- Context API for cart state
- Sonner for toast notifications
- Plain CSS / Inline Styling
- localStorage for persistence
Getting Started
1. Clone the repo
   git clone https://github.com/your-username/minicart
   cd minicart

2. Install dependencies
   npm install

3. Run the development server
   npm run dev

4. Open  browser at:
   http://localhost:3000
**Sample Product Data**
[
  {
    "id": 1,
    "name": "Wireless Headphones",
    "price": 49.99,
    "image": "/headphones.jpg",
    "specs": ["Bluetooth 5.0", "20 Hours Battery", "Noise Cancellation"]
  },
  {
    "id": 2,
    "name": "Smart Watch",
    "price": 89.99,
    "image": "/watch.jpg",
    "specs": ["Heart Rate Monitor", "Waterproof", "GPS"]
  }
]
**Completed Requirements**
- Product listing 
- Product details with specs 
- Add to cart + toast 
- Cart with edit/remove 
- Cart state in localStorage 
- Checkout form and summary 
- Clean layout and styling 
- Responsive design 
**Future Enhancements** 
- Persist orders (backend)
- Payment integration (Stripe/Razorpay)
- Product filtering/sorting
- Dark mode toggle
Author
KRISHNENDU SANTHOSHKUMAR
Built for the MiniCart project requirement.
