Set up instruction 
git clone https://github.com/kushalverma02/shopping-cart-react.git
cd shopping-cart-react

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
```

📄 Project Description
When a user visits the webpage, they are presented with a clean and simple UI displaying item cards. Each card includes product details, an "Add to Cart" button, and an option to apply a coupon code.
If the user enters a promo code of the format FLAT50, a 50% discount is applied to the item price. When the user clicks "Add to Cart", the discount is applied, the item is added to the cart, and a confirmation popup is displayed.
To add more units of the same item, the user must navigate to the Cart section of the website.

In the Cart section, the selected products are displayed with their full details and discounted price. The user can:
 -Increase or decrease the quantity using + and – buttons (up to a maximum of 5 units per item)
 -Remove items entirely using the Remove button
 -See both the original total price and the discounted total price
 -The + button gets disabled when the item reaches the maximum quantity limit. The cart automatically recalculates and displays the total cost as items are added or removed.


