import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">Faça login na sua conta</h2>
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Endereço de e-mail</label>
            <div className="mt-1">
              <input id="email" name="email" type="email" autoComplete="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
          </div>
          <div>
            <label htmlFor="password-input" className="text-sm font-medium text-gray-700">Senha</label>
            <div className="mt-1">
              <input id="password-input" name="password" type="password" autoComplete="current-password" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Entrar
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-600">
          Não é um membro?{' '}
          <Link to="/registro" className="font-medium text-indigo-600 hover:text-indigo-500">
            Cadastre-se agora
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
