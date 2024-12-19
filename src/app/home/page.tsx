import React from 'react';
import Image from 'next/image';

const BookStoreHomePage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-background">
       
            <header className="bg-gray-800 shadow-lg w-full py-8">
                <h1 className="text-yellow-400 text-5xl md:text-6xl font-serif font-bold text-center">KeazoNBOOKS</h1>
                <p className="text-center text-lg md:text-xl mt-2 text-white">Discover your next great read! From Sherlock Holmes to Harry Potter, we have it all...</p>
            </header>
            <main className="flex-grow container mx-auto p-4 md:p-8">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-center text-white">Explore Our Collection</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {/* Book Card Example */}
                    {[
                        { title: "Detective", genre: "Love", description: "Novel", imgSrc: "/detectivelove.jpg"},
                        { title: "History", genre: "Science Fiction", description: "Fantastic", imgSrc: "/history.jpeg"},
                        { title: "The Notebook", genre: "Romantic Novel", description: "A love story that spans decades, exploring the enduring power of love.", imgSrc: "/thenotebook.jpg"},
                        { title: "Popular Categories", genre: "Memory books", description: "Novels, Story books, Travel books, Poetry books", imgSrc: "/popular.jpg"},
                    ].map((book, index) => (
                        <div key={index} className="bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                            <Image src={book.imgSrc} alt={`${book.title} Cover`} className="w-full h-30 object-cover" width={500} height={300} />
                            <div className="p-4 md:p-6">
                                <h3 className="text-xl md:text-2xl font-serif font-semibold text-white">{book.title}</h3>
                                <p className="text-gray-300">{book.genre}</p>
                                <p className="text-yellow-400 mt-2 text-lg md:text-xl">{book.description}</p>
                                <button className="mt-4 bg-yellow-500 text-black py-2 px-4 md:px-6 rounded-lg hover:bg-yellow-600 transition duration-300">Now Read!</button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default BookStoreHomePage;
