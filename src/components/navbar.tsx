import React from 'react';
import Link from 'next/link'; // Corrected import statement for Next.js routing
import { FaHome, FaBook, FaTag, FaShoppingCart, FaBlog, FaEnvelope, FaMoneyBillWave, FaInfoCircle } from 'react-icons/fa'; // Importing icons

const Navbar = () => {
    return (
        <nav className="bg-gray-800 shadow-lg w-full py-4">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                <h1 className="text-yellow-400 text-3xl font-serif font-bold mb-4 sm:mb-0">KeazoNBOOKS</h1>
                <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
                    <li>
                        <Link href="/" className="text-white hover:text-yellow-400 flex items-center">
                            <FaHome className="mr-2" /> Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/collection" className="text-white hover:text-yellow-400 flex items-center">
                            <FaBook className="mr-2" /> Collection
                        </Link>
                    </li>
                    <li>
                        <Link href="/sale" className="text-white hover:text-yellow-400 flex items-center">
                            <FaTag className="mr-2" /> Sale
                        </Link>
                    </li>
                    <li>
                        <Link href="/addtocart" className="text-white hover:text-yellow-400 flex items-center">
                            <FaShoppingCart className="mr-2" /> Add to Cart
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="text-white hover:text-yellow-400 flex items-center">
                            <FaBlog className="mr-2" /> Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-white hover:text-yellow-400 flex items-center">
                            <FaEnvelope className="mr-2" /> Contact
                        </Link>
                    </li>
                    <li>
                        <Link href="/buynow" className="text-white hover:text-yellow-400 flex items-center">
                            <FaMoneyBillWave className="mr-2" /> Buy Now
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-white hover:text-yellow-400 flex items-center">
                            <FaInfoCircle className="mr-2" /> About
                        </Link>
                    </li>
                 
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
