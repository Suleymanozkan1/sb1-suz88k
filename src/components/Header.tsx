import React from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-black rounded-full" />
            <span className="text-2xl font-bold text-emerald-800">Mei Mei</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-emerald-700 hover:text-emerald-500 transition-colors">Home</a>
            <a href="#about" className="text-emerald-700 hover:text-emerald-500 transition-colors">Meet Mei Mei</a>
            <a href="#tokenomics" className="text-emerald-700 hover:text-emerald-500 transition-colors">Tokenomics</a>
            <a href="#join" className="text-emerald-700 hover:text-emerald-500 transition-colors">Join Us</a>
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-500 transition-colors">
              Connect Wallet
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#home" className="block text-emerald-700 hover:text-emerald-500">Home</a>
            <a href="#about" className="block text-emerald-700 hover:text-emerald-500">Meet Mei Mei</a>
            <a href="#tokenomics" className="block text-emerald-700 hover:text-emerald-500">Tokenomics</a>
            <a href="#join" className="block text-emerald-700 hover:text-emerald-500">Join Us</a>
            <button className="w-full bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-500">
              Connect Wallet
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}