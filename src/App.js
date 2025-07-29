import { useState } from "react";
import ReactDom from "react-dom/client"
import Home from "./components/Home"

import { BrowserRouter, Routes, Route } from 'react-router';
import Cart from "./components/Cart";
import Layout from "./components/layout";

export default function App() {
    const [cartCount, setCartCount] = useState(0);
    const [cartData , setCartData] = useState([]);
    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Layout cartCount={cartCount}/>}>
                        <Route path="cart" element={<Cart  cartData = {cartData} setCartData ={setCartData} setCartCount ={setCartCount} />} />
                        <Route index element={<Home cartCount={cartCount} setCartCount={setCartCount}  cartData = {cartData} setCartData= {setCartData}/>} />
                    </Route>
                </Routes>

                
            </BrowserRouter >

        </>
    )
}
ReactDom.createRoot(document.getElementById("root")).render(<App />)