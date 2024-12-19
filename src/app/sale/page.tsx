import React from 'react';
import Image from 'next/image';

const BookStoreSalePage = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center">
            <header className="bg-gray-800 shadow-lg w-full py-8">
                <h1 className="text-yellow-400 text-5xl md:text-6xl font-serif font-bold text-center">KeazoNBOOKS Sale</h1>
                <p className="text-center text-lg md:text-xl mt-2 text-white">Don&apos;t miss out on our amazing discounts!</p>
            </header>
            <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-center text-white">Current Sales</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                    {[ 
                        { title: "The Great Gatsby", originalPrice: "$20.00", salePrice: "$15.00", imgSrc: "/thegreatgatsby.jpg" },
                        { title: "1984", originalPrice: "$18.00", salePrice: "$12.00", imgSrc: "/1984.jpg" },
                        { title: "To Kill a Mockingbird", originalPrice: "$22.00", salePrice: "$17.00", imgSrc: "/tokillamockingbird.jpg" },
                        { title: "Pride and Prejudice", originalPrice: "$25.00", salePrice: "$20.00", imgSrc: "/prideandprejudice.jpg" },
                    ].map((book, index) => (
                        <div key={index} className="bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                            <Image src={book.imgSrc} alt={`${book.title} Cover`} className="h-30 object-cover" width={500} height={300} />
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-serif font-semibold text-white">{book.title}</h3>
                                <p className="text-gray-300 line-through">{book.originalPrice}</p>
                                <p className="text-yellow-400 mt-2 text-lg">{book.salePrice}</p>
                                <button className="mt-4 bg-yellow-500 text-black py-2 px-4 sm:px-6 rounded-lg hover:bg-yellow-600 transition duration-300">Buy Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <footer className="bg-gray-800 shadow-lg w-full py-4">
                <p className="text-yellow-400 text-center">© 2023 KeazoNBOOKS. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default BookStoreSalePage;
