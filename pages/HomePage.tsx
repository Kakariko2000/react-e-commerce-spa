import React, { useState, useEffect, useMemo } from 'react';
import { Product } from '../types';
import { productService } from '../services/productService';
import ProductCard from '../components/ProductCard';
import Spinner from '../components/Spinner';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await productService.getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-8 h-96">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Catálogo de Produtos</h1>
        <p className="mt-2 text-lg text-gray-500">Descubra nossa coleção exclusiva de produtos.</p>
      </div>
      
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Buscar produtos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold text-gray-700">Nenhum produto encontrado</h2>
          <p className="text-gray-500 mt-2">Tente ajustar seu termo de busca.</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
