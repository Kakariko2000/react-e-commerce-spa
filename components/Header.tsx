import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const ShoppingCartIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const UserIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const Header: React.FC = () => {
  const { itemCount } = useCart();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          ShopSphere
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-indigo-500 transition-colors">Início</Link>
          <Link to="/pedidos" className="text-gray-600 hover:text-indigo-500 transition-colors">Pedidos</Link>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="flex items-center text-gray-600 hover:text-indigo-500 transition-colors">
              <UserIcon />
            </Link>
            <Link to="/carrinho" className="relative flex items-center text-gray-600 hover:text-indigo-500 transition-colors">
              <ShoppingCartIcon />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;