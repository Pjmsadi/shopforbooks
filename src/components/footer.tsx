import React from 'react';
import Link from 'next/link'; // Corrected import statement for Next.js routing
import { FaHome, FaBook, FaTag, FaShoppingCart, FaBlog, FaEnvelope, FaMoneyBillWave, FaInfoCircle } from 'react-icons/fa'; // Importing additional icons

const Footer = () => {
    return (
        <footer className="bg-gray-800 shadow-lg w-full py-4">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                <h1 className="text-yellow-400 text-2xl sm:text-3xl font-serif font-bold text-center sm:text-left">KeazoNBOOKS</h1>
                <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
                    <li>
                        <Link href="/" className="text-white hover:text-yellow-400 flex items-center justify-center sm:justify-start">
                            <FaHome className="mr-2" /> Go to Home Page
                        </Link>
                    </li>
                    <li>
                        <Link href="/collection" className="text-white hover:text-yellow-400 flex items-center justify-center sm:justify-start">
                            <FaBook className="mr-2" /> Collection
                        </Link>
                    </li>
                    <li>
                        <Link href="/sale" className="text-white hover:text-yellow-400 flex items-center justify-center sm:justify-start">
                            <FaTag className="mr-2" /> Sale
                        </Link>
                    </li>
                    <li>
                        <Link href="/addtocart" className="text-white hover:text-yellow-400 flex items-center justify-center sm:justify-start">
                            <FaShoppingCart className="mr-2" /> Add to Cart
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="text-white hover:text-yellow-400 flex items-center justify-center sm:justify-start">
                            <FaBlog className="mr-2" /> Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-white hover:text-yellow-400 flex items-center justify-center sm:justify-start">
                            <FaEnvelope className="mr-2" /> Contact
                        </Link>
                    </li>
                    <li>
                        <Link href="/buynow" className="text-white hover:text-yellow-400 flex items-center justify-center sm:justify-start">
                            <FaMoneyBillWave className="mr-2" /> Buy Now
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-white hover:text-yellow-400 flex items-center justify-center sm:justify-start">
                            <FaInfoCircle className="mr-2" /> About
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="text-center mt-4">
                <p className="text-gray-400 text-sm">© 2023 KeazoNBOOKS. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
