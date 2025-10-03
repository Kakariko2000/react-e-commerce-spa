import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmationPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 text-center">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h1 className="text-3xl font-bold text-gray-800 mt-4">Obrigado!</h1>
            <p className="text-gray-600 mt-2">Seu pedido foi realizado com sucesso.</p>
            <p className="text-gray-600 mt-1">Enviamos uma confirmação para o seu endereço de e-mail.</p>
            <Link 
                to="/" 
                className="mt-8 inline-block bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors"
            >
                Continuar Comprando
            </Link>
        </div>
    </div>
  );
};

export default ConfirmationPage;
