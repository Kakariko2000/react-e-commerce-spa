import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-12">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-500">
            © 2024 ShopSphere. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-indigo-500">Facebook</a>
            <a href="#" className="text-gray-500 hover:text-indigo-500">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-indigo-500">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
