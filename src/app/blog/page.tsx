import React from 'react';
import Image from 'next/image';

const BookStoreBlogPage = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center">
            <header className="bg-gray-800 shadow-lg w-full py-8">
                <h1 className="text-yellow-400 text-4xl md:text-5xl font-serif font-bold text-center">KeazoNBOOKS Blog</h1>
                <p className="text-center text-base md:text-lg mt-2 text-white">Dive into the world of literature with our latest articles!</p>
            </header>
            <main className="flex-grow container mx-auto p-4 md:p-8">
                <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-center text-white">Latest Posts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* Blog Post Example */}
                    {[ 
                        { title: "The Art of Storytelling", excerpt: "Exploring the techniques that make stories unforgettable.", imgSrc: "/theartofstorytelling.jpg" },
                        { title: "Top 10 Must-Read Classics", excerpt: "A list of timeless novels that everyone should read.", imgSrc: "/bestclassicbooks.jpg" },
                        { title: "Understanding Literary Genres", excerpt: "A deep dive into different genres and their characteristics.", imgSrc: "/literary.jpg" },
                        { title: "The Future of Reading", excerpt: "How technology is changing the way we read and consume literature.", imgSrc: "/thefutureofreading.jpg" },
                    ].map((post, index) => (
                        <div key={index} className="bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                            <Image src={post.imgSrc} alt={`${post.title} Cover`} className="w-full h-30 md:h-30 object-cover" width={500} height={300} />
                            <div className="p-4 md:p-6">
                                <h3 className="text-lg md:text-xl font-serif font-semibold text-white">{post.title}</h3>
                                <p className="text-gray-300 text-sm md:text-base">{post.excerpt}</p>
                                <button className="mt-4 bg-yellow-500 text-black py-2 px-4 md:px-6 rounded-lg hover:bg-yellow-600 transition duration-300">Read More</button>
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

export default BookStoreBlogPage;
