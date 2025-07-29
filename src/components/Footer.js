export default function FooterSection() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8 mt-16">
            <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
                {/* <!-- Logo / Brand --> */}
                <div className="mb-6 md:mb-0">
                    <h1 className="text-white text-2xl font-bold">YourBrand</h1>
                    <p className="text-gray-400 text-sm mt-1">© 2025 YourBrand. All rights reserved.</p>
                </div>

                {/* <!-- Navigation Links --> */}
                <nav className="flex flex-wrap gap-6 text-sm">
                    <a href="#" className="hover:text-white transition-colors">Home</a>
                    <a href="#" className="hover:text-white transition-colors">Products</a>
                    <a href="#" className="hover:text-white transition-colors">About</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                </nav>
                {/* 
    <!-- Social Media Icons (Example) --> */}
                <div className="flex gap-4 mt-6 md:mt-0">
                    <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4 1a9.05 9.05 0 01-2.88 1.1A4.52 4.52 0 0016.7.9c-2.49 0-4.5 2.04-4.5 4.55 0 .36.04.7.11 1.03A12.82 12.82 0 013 2.1a4.43 4.43 0 001.4 6.07 4.48 4.48 0 01-2.04-.57v.06c0 2.17 1.53 4 3.56 4.42a4.52 4.52 0 01-2.03.08 4.5 4.5 0 004.2 3.14 9 9 0 01-5.57 1.93A9.2 9.2 0 012 18.1 12.7 12.7 0 008.29 20c7.54 0 11.67-6.15 11.67-11.48 0-.18 0-.35-.01-.53A8.18 8.18 0 0023 3z" />
                        </svg>
                    </a>
                    {/* <!-- Add more social icons similarly --> */}
                </div>
            </div>
        </footer>
    )
}