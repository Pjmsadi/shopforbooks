import React from 'react';

const BookStoreContactPage = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center">
            <header className="bg-gray-800 shadow-lg w-full py-8">
                <h1 className="text-yellow-400 text-4xl md:text-5xl font-serif font-bold text-center">KeazoNBOOKS</h1>
                <p className="text-center text-base md:text-lg mt-2 text-white">We&apos;d love to hear from you!</p>
            </header>
            <main className="flex-grow container mx-auto p-4 md:p-8">
                <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-center text-white">Get in Touch</h2>
                <form className="bg-gray-700 rounded-lg shadow-lg p-6 md:p-8">
                    <div className="mb-6">
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="message">Message</label>
                        <textarea className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="message" rows={4} placeholder="Your Message" required></textarea>
                    </div>
                    <button className="mt-6 bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300" type="submit">Send Message</button>
                </form>
            </main>
            <footer className="bg-gray-800 shadow-lg w-full py-4">
                <p className="text-yellow-400 text-center">© 2023 KeazoNBOOKS. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default BookStoreContactPage;
