import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import CartItem from '../components/CartItem';

const CartPage: React.FC = () => {
  const { cart, itemCount, totalPrice, clearCart } = useCart();

  const shippingCost = 5.00;
  const tax = totalPrice * 0.08;
  const grandTotal = totalPrice + shippingCost + tax;

  if (itemCount === 0) {
    return (
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Seu Carrinho está Vazio</h1>
        <p className="text-gray-600 mb-8">Parece que você ainda não adicionou nada ao seu carrinho.</p>
        <Link 
          to="/" 
          className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Começar a Comprar
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Carrinho de Compras</h1>
      <div className="lg:flex lg:space-x-8">
        <div className="lg:w-2/3 bg-white rounded-lg shadow-md">
          <div className="p-4 border-b font-semibold hidden md:flex">
            <div className="w-2/5">Produto</div>
            <div className="w-3/5 flex justify-between">
              <span className="w-1/3 text-center">Quantidade</span>
              <span className="w-1/3 text-right">Total</span>
              <span className="w-1/6 text-right"></span>
            </div>
          </div>
          {cart.map(item => <CartItem key={item.id} item={item} />)}
           <div className="p-4 flex justify-end">
            <button onClick={clearCart} className="text-sm text-red-500 hover:underline">Limpar Carrinho</button>
          </div>
        </div>
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>{totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Frete</span>
              <span>{shippingCost.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Imposto (8%)</span>
              <span>{tax.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
            <div className="border-t pt-4 flex justify-between font-bold text-xl">
              <span>Total</span>
              <span>{grandTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
            <Link to="/checkout">
              <button className="w-full mt-6 bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                Ir para o Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
