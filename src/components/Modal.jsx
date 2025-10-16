import * as React from 'react';

export default function Modal({ isOpen, setIsOpen, title, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-gradient-to-r from-[#00FF99] to-[#00cc7a] text-[#121212] p-6 rounded-lg max-w-lg w-full relative">
                <button className="absolute top-2 right-2 text-[#121212]" onClick={() => setIsOpen(false)}>
                    &times;
                </button>
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <div>{children}</div>
            </div>
        </div>
    );
}