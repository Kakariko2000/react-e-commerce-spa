import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">Crie uma conta</h2>
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email-register" className="text-sm font-medium text-gray-700">Endereço de e-mail</label>
            <div className="mt-1">
              <input id="email-register" name="email" type="email" autoComplete="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
          </div>
          <div>
            <label htmlFor="password-register" className="text-sm font-medium text-gray-700">Senha</label>
            <div className="mt-1">
              <input id="password-register" name="password" type="password" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
          </div>
          <div>
            <label htmlFor="password-confirm" className="text-sm font-medium text-gray-700">Confirmar Senha</label>
            <div className="mt-1">
              <input id="password-confirm" name="password-confirm" type="password" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Cadastrar
            </button>
          </div>
        </form>
         <p className="text-sm text-center text-gray-600">
          Já tem uma conta?{' '}
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
