import React from 'react';
import { CartItem as CartItemType } from '../types';
import { useCart } from '../hooks/useCart';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-500">{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-300 rounded-md">
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 text-lg font-semibold text-gray-600 hover:bg-gray-100 rounded-l-md">-</button>
          <span className="px-4 py-1 text-gray-800">{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 text-lg font-semibold text-gray-600 hover:bg-gray-100 rounded-r-md">+</button>
        </div>
        <p className="text-lg font-bold w-24 text-right">{(item.price * item.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;