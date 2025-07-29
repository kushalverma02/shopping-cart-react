import CartSection from "./Cart"
import Home from "./Home"
import { Link } from 'react-router-dom';

export default function HeaderSection(props) {
    return (
        <>
            <header className="fixed top-0 left-0 w-full z-100 bg-white shadow-md flex justify-between items-center px-6 py-4">
                <div className="text-xl font-bold text-gray-800">MyStore</div>
                <nav className="flex items-center gap-6">
                    <Link to="/" className="text-gray-700 hover:text-blue-600">  Home
                    </Link>
                    <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
                </nav>
                <div className="flex items-center gap-4">
                    <Link to="/cart">
                        <button className="relative flex items-center gap-1 px-4 py-2  text-gray-700 hover:text-blue-600 transition-colors">
                            <span className="font-medium">Cart</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                                <circle cx="9" cy="21" r="1" />
                                <circle cx="20" cy="21" r="1" />
                            </svg>
                            <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1.5">
                                {props.cartCount}
                            </span>
                        </button>
                    </Link>
                </div>
            </header>
        </>
    )
}