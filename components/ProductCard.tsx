import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../hooks/useCart';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 flex flex-col">
      <Link to={`/produto/${product.id}`}>
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">
            <Link to={`/produto/${product.id}`} className="hover:text-indigo-600">{product.name}</Link>
        </h3>
        <p className="text-sm text-gray-500 mb-4">{product.category}</p>
        <p className="text-2xl font-bold text-indigo-600 mt-auto">{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      </div>
       <div className="px-6 pb-4">
        <button 
          onClick={handleAddToCart}
          className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-300"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductCard;