import React from 'react';
import Image from 'next/image';

const BookStoreAboutPage = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center">
            <header className="bg-gray-800 shadow-lg w-full py-8">
                <h1 className="text-yellow-400 text-4xl md:text-5xl font-serif font-bold text-center">About KeazoNBOOKS</h1>
                <p className="text-center text-base md:text-lg mt-2 text-white">Your gateway to the world of literature!</p>
            </header>
            <main className="flex-grow container mx-auto p-4 md:p-8">
                <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-center text-white">Our Story</h2>
                <Image src="/foraboutpage1.jpg" alt="Our Story" className="mb-4 rounded-lg shadow-lg w-full h-auto" width={500} height={300} />
                <p className="text-gray-300 mb-4 text-center text-sm md:text-base">
                    At KeazoNBOOKS, we believe in the power of stories to inspire, educate, and entertain. Our journey began with a passion for reading and a desire to share that love with others.
                </p>
                <p className="text-gray-300 mb-4 text-center text-sm md:text-base">
                    We curate a diverse collection of books, from timeless classics to contemporary bestsellers, ensuring that there is something for every reader.
                </p>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-center text-white">Our Mission</h2>
                <Image src="/foraboutpage2.jpg" alt="Our Mission" className="mb-4 rounded-lg shadow-lg w-full h-auto" width={500} height={300} />
                <p className="text-gray-300 mb-4 text-center text-sm md:text-base">
                    Our mission is to foster a community of readers and writers, providing a space where literature can be celebrated and shared. We host events, book clubs, and author signings to connect with our customers and promote the joy of reading.
                </p>
            </main>
            <footer className="bg-gray-800 shadow-lg w-full py-4">
                <p className="text-yellow-400 text-center">© 2023 KeazoNBOOKS. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default BookStoreAboutPage;
