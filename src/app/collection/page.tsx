import React from 'react';
import Image from 'next/image';

const BookStoreCollectionPage = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center">
            <header className="bg-gray-800 shadow-lg w-full py-8">
                <h1 className="text-yellow-400 text-5xl font-serif font-bold text-center">Our Book Collection</h1>
                <p className="text-center text-lg mt-2 text-white">Explore a diverse range of books curated just for you!</p>
            </header>
            <main className="flex-grow container mx-auto p-4 sm:p-8">
                <h2 className="text-3xl font-serif font-semibold mb-6 text-center text-white">Featured Books</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[ 
                        { title: "The Alchemist", genre: "Fiction", description: "A journey of self-discovery.", imgSrc: "/thealchemist.jpeg" },
                        { title: "Sapiens", genre: "Non-Fiction", description: "A brief history of humankind.", imgSrc: "/Sapiens.jpeg" },
                        { title: "The Power of Habit", genre: "Self-Help", description: "Why we do what we do in life and business.", imgSrc: "/power-of-habit.jpg" },
                        { title: "Becoming", genre: "Biography", description: "The memoir of Michelle Obama.", imgSrc: "/becoming.jpg" },
                    ].map((book, index) => (
                        <div key={index} className="bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                            <Image src={book.imgSrc} alt={`${book.title} Cover`} className=" h-30 object-cover" width={500} height={300} />
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-serif font-semibold text-white">{book.title}</h3>
                                <p className="text-gray-300">{book.genre}</p>
                                <p className="text-yellow-400 mt-2 text-base sm:text-lg">{book.description}</p>
                                <button className="mt-4 bg-yellow-500 text-black py-2 px-4 sm:px-6 rounded-lg hover:bg-yellow-600 transition duration-300">Now Read!</button>
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

export default BookStoreCollectionPage;
