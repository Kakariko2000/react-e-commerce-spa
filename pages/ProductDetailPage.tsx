import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../types';
import { productService } from '../services/productService';
import Spinner from '../components/Spinner';
import { useCart } from '../hooks/useCart';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const data = await productService.getProductById(parseInt(id, 10));
        setProduct(data || null);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="container mx-auto px-6 py-8 h-96"><Spinner /></div>;
  }

  if (!product) {
    return <div className="text-center py-16 text-2xl font-semibold text-gray-700">Produto não encontrado.</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto lg:flex">
        <div className="lg:w-1/2">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8 lg:w-1/2">
          <h2 className="text-sm uppercase text-gray-500 tracking-widest">{product.category}</h2>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">{product.name}</h1>
          <p className="text-gray-600 mt-4">{product.description}</p>
          <div className="mt-6">
            <span className="text-4xl font-extrabold text-indigo-600">{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
          </div>
          <div className="mt-8 flex items-center">
            <div className="flex items-center border border-gray-300 rounded-md mr-4">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-3 py-2 text-lg font-semibold text-gray-600 hover:bg-gray-100 rounded-l-md">-</button>
                <span className="px-4 py-2 text-lg text-gray-800">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="px-3 py-2 text-lg font-semibold text-gray-600 hover:bg-gray-100 rounded-r-md">+</button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-300"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;