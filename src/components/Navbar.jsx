import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-[#00FF99] border-opacity-30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-[#00FF99] text-xl font-bold neon-glow-hover" onClick={closeMenu}>
            MR.MANIAC
          </Link>

          <div className="hidden md:flex gap-8">
            <Link
              to="/"
              className="text-[#E0E0E0] hover:text-[#00FF99] neon-glow-hover transition-colors"
            >
              [ABOUT]
            </Link>
            <Link
              to="/projects"
              className="text-[#E0E0E0] hover:text-[#00FF99] neon-glow-hover transition-colors"
            >
              [PROJECTS]
            </Link>
            <Link
              to="/contact"
              className="text-[#E0E0E0] hover:text-[#00FF99] neon-glow-hover transition-colors"
            >
              [CONTACT]
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-[#00FF99] neon-glow-hover transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 breathing-gradient border border-[#00FF99] border-opacity-30">
            <div className="flex flex-col space-y-4 p-6">
              <Link
                to="/"
                onClick={closeMenu}
                className="text-[#E0E0E0] hover:text-[#00FF99] neon-glow-hover transition-colors"
              >
                [ABOUT]
              </Link>
              <Link
                to="/projects"
                onClick={closeMenu}
                className="text-[#E0E0E0] hover:text-[#00FF99] neon-glow-hover transition-colors"
              >
                [PROJECTS]
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="text-[#E0E0E0] hover:text-[#00FF99] neon-glow-hover transition-colors"
              >
                [CONTACT]
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
