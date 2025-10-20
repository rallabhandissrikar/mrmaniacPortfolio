import * as React from 'react';

export default function Modal({ isOpen, setIsOpen, title, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="breathing-gradient border border-[#00FF99] border-opacity-30 p-8 rounded w-full max-w-2xl max-h-[80vh] relative bg-black overflow-hidden">
                <button
                    className="absolute top-4 right-4 text-[#00FF99] text-3xl hover:text-[#00cc7a] transition-colors leading-none z-10"
                    onClick={() => setIsOpen(false)}
                >
                    &times;
                </button>
                {title && <h2 className="text-2xl font-bold text-[#00FF99] mb-6 pr-8">{title}</h2>}
                <div className="text-[#E0E0E0] overflow-y-auto max-h-[calc(80vh-8rem)] scrollbar-hide">
                    {children}
                </div>
            </div>
        </div>
    );
}