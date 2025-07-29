Set up instruction 
git clone https://github.com/your-username/mystore-shopping-cart.git
cd mystore-shopping-cart

npm install                                  # Install all dependencies
npm install parcel                           # Install Parcel bundler
npm install tailwindcss @tailwindcss/postcss # Install Tailwind CSS

npx parcel src/index.html                    # To run the project on the local server 

 -----------

MyStore - Shopping Cart App

A simple and responsive e-commerce shopping cart application built with REACT .
It allows users to browse products, manage their cart,
and view pricing details with discounts and quantity controls.

-------------

Features

-In the home page view a list of shopping items
- Add/remove items to/from the cart
- Adjust item quantities (limit: 1–5)
- Visual discount breakdown
- Real-time cart count in header
- Responsive layout with Tailwind CSS
- can apply brand discount  coupon on each project
- add to cart button style changes as item added to the cart 

---

Tech Stack used 

- Frontend: React (Functional components, Hooks, React Router)
- Routing: React Router 
- Styling: Tailwind CSS
- State Management: useState and props drilling

----------

## 📁 Project Structure

```bash
your-project/
├── components/
│   ├── Cart.js           # Cart UI and logic
│   ├── Home.js           # Home page displaying items
│   ├── Header.js         # Navbar with cart count
│   ├── Footer.js         # Footer component
│   ├── Layout.js         # Shared layout with header/footer
│   └── data.js           # Static product list
├── App.js                # App routing and global state
├── index.js              # Entry point
├── index.css             # Tailwind and global styles


