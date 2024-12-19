import React from 'react';
import Image from 'next/image';

const BookStoreBuyNowPage = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center">
            <header className="bg-gray-800 shadow-lg w-full py-8">
                <h1 className="text-yellow-400 text-4xl md:text-5xl font-serif font-bold text-center">Buy Your Favorite Books</h1>
                <p className="text-center text-base md:text-lg mt-2 text-white">Secure your next great read with just a click!</p>
            </header>
            <main className="flex-grow container mx-auto p-4 md:p-8">
                <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-center text-white">Available Books</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {[ 
                        { title: "The Great Gatsby", genre: "Fiction", description: "A classic novel of the Jazz Age.", imgSrc: "/thegreatgatsby.jpg" },
                        { title: "1984", genre: "Dystopian", description: "A novel about totalitarianism and surveillance.", imgSrc: "/1984.jpg" },
                        { title: "To Kill a Mockingbird", genre: "Classic", description: "A novel about racial injustice in the Deep South.", imgSrc: "/tokillamockingbird.jpg" },
                        { title: "Pride and Prejudice", genre: "Romance", description: "A romantic novel that critiques the British landed gentry.", imgSrc: "/prideandprejudice.jpg" },
                    ].map((book, index) => (
                        <div key={index} className="bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                            <Image src={book.imgSrc} alt={`${book.title} Cover`} className="w-full h-30 md:h-30 object-cover" width={500} height={300} />
                            <div className="p-4 md:p-6">
                                <h3 className="text-lg md:text-xl font-serif font-semibold text-white">{book.title}</h3>
                                <p className="text-gray-300">{book.genre}</p>
                                <p className="text-yellow-400 mt-2 text-base md:text-lg">{book.description}</p>
                                <button className="mt-4 bg-yellow-500 text-black py-2 px-4 md:px-6 rounded-lg hover:bg-yellow-600 transition duration-300">Buy Now</button>
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

export default BookStoreBuyNowPage;
