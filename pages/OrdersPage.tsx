import React from 'react';
import { Link } from 'react-router-dom';

const OrdersPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Seus Pedidos</h1>
      <p className="text-gray-600 mb-8">Aqui é onde seu histórico de pedidos será exibido. (Esta é uma página de exemplo)</p>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md text-left">
        <h3 className="font-semibold text-lg border-b pb-2">Pedido #12345</h3>
        <p className="text-gray-500 mt-2">Feito em: 26 de Outubro, 2024</p>
        <p className="text-gray-700 mt-1">Status: Enviado</p>
        <p className="font-bold text-right mt-2">R$ 254,50</p>
      </div>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md text-left mt-4">
        <h3 className="font-semibold text-lg border-b pb-2">Pedido #12344</h3>
        <p className="text-gray-500 mt-2">Feito em: 22 de Outubro, 2024</p>
        <p className="text-gray-700 mt-1">Status: Entregue</p>
        <p className="font-bold text-right mt-2">R$ 95,00</p>
      </div>
      <Link 
        to="/" 
        className="mt-8 inline-block bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Continuar Comprando
      </Link>
    </div>
  );
};

export default OrdersPage;
