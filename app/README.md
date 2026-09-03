🛒 ShopMate — E-Commerce

 Web ApplicationA modern, responsive, and feature-rich E-Commerce web application built with React.js. 
 ShopMate provides a seamless online shopping experience, allowing users to discover top products,
  filter categories, manage their wishlist and cart in real time, and process multi-step checkouts.

  🚀 Features

  🏠 Dynamic Home & Hero Section: Features promotional banners, new arrivals, discount badges, and interactive CTAs.
  📦 Product Catalog & Category Filtering: Displays high-quality products fetched dynamically from FakeStoreAPI with star ratings and category tags.

  ❤️ Wishlist System: Interactive product favoriting toggle (Wishlist) directly on product cards.

  🛒 Real-Time Shopping Cart: Full state-managed cart utilizing React Context API allowing users to add products, adjust quantities, remove 
  items, and see live subtotal, discount, and shipping calculations.

  💳 Multi-Step Checkout Flow: Smooth step-by-step checkout process
   (DeliveryStep $\rightarrow$ PaymentStep $\rightarrow$ OrderSummary) with lifted state architecture to prevent data loss.

  📱 Responsive & Interactive UI: Optimized navigation with mobile hamburger menu, interactive overlays, dynamic routing, and accessible UI controls

  .🛠️ Tech StackFrontend 
  
  Framework: React.js (Functional Components, Hooks)
  Routing: React Router DOM 
  (Link, useNavigate)
  State Management: React Context API & Custom Hooks (useCart)
  API Integration: FakeStoreAPI
  Styling: CSS3 (Custom Modules, Flexbox, CSS Grid, Responsive Animations)
  Version Control: Git & GitHub
  
  📁 Project ArchitecturePlaintextsrc/
├── assets/             # Icons, logos, and local media resources
├── components/
│   ├── Navbar/         # Responsive navigation bar & mobile overlay
│   ├── Hero/           # Dynamic hero section & promotional cards
│   ├── BestProduct/    # Best-selling products layout & FakeStoreAPI fetching
│   ├── Cart/           # Cart view, item counter, price calculation & CartContext
│   └── Checkout/       # Multi-step checkout flow (Stepper, Delivery, Payment, Summary)
└── App.js              # Application entry & router configuration

