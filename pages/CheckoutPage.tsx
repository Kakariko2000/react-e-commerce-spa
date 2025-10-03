import React, { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';

enum CheckoutStep {
  DELIVERY,
  REVIEW,
  PAYMENT,
}

const CheckoutPage: React.FC = () => {
  const [step, setStep] = useState<CheckoutStep>(CheckoutStep.DELIVERY);
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const shippingCost = 5.00;
  const tax = totalPrice * 0.08;
  const grandTotal = totalPrice + shippingCost + tax;
  
  const handleNext = () => {
    if (step < CheckoutStep.PAYMENT) {
      setStep(s => s + 1);
    }
  };

  const handleBack = () => {
    if (step > CheckoutStep.DELIVERY) {
      setStep(s => s - 1);
    }
  };
  
  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order Submitted!");
    // In a real app, you would send data to the backend here.
    clearCart();
    navigate('/confirmation');
  };

  const renderStep = () => {
    switch (step) {
      case CheckoutStep.DELIVERY:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Informações de Entrega</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Nome" className="p-2 border rounded" />
              <input type="text" placeholder="Sobrenome" className="p-2 border rounded" />
              <input type="email" placeholder="E-mail" className="p-2 border rounded md:col-span-2" />
              <input type="text" placeholder="Endereço" className="p-2 border rounded md:col-span-2" />
              <input type="text" placeholder="Cidade" className="p-2 border rounded" />
              <input type="text" placeholder="Estado / Província" className="p-2 border rounded" />
              <input type="text" placeholder="CEP / Código Postal" className="p-2 border rounded" />
              <input type="text" placeholder="País" className="p-2 border rounded" />
            </div>
             <button onClick={handleNext} className="w-full mt-6 bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                Continuar para Revisão
            </button>
          </div>
        );
      case CheckoutStep.REVIEW:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Revise seu Pedido</h2>
            <div className="bg-gray-50 p-4 rounded-lg border">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                  <span className="font-medium">{item.name} <span className="text-gray-500">x {item.quantity}</span></span>
                  <span className="text-gray-700">{(item.price * item.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-between font-bold text-xl">
              <span>Total</span>
              <span>{grandTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
            <div className="flex justify-between mt-6">
                <button onClick={handleBack} className="bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-400">Voltar</button>
                <button onClick={handleNext} className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700">Continuar para Pagamento</button>
            </div>
          </div>
        );
      case CheckoutStep.PAYMENT:
        return (
          <form onSubmit={handleSubmitOrder}>
            <h2 className="text-2xl font-semibold mb-4">Detalhes do Pagamento</h2>
            <p className="text-gray-500 mb-4">Este é um formulário de pagamento simulado.</p>
            <div className="space-y-4">
                <input type="text" placeholder="Número do Cartão" className="p-2 border rounded w-full" />
                <input type="text" placeholder="Nome no Cartão" className="p-2 border rounded w-full" />
                <div className="flex space-x-4">
                    <input type="text" placeholder="MM / AA" className="p-2 border rounded w-1/2" />
                    <input type="text" placeholder="CVC" className="p-2 border rounded w-1/2" />
                </div>
            </div>
             <div className="flex justify-between mt-6">
                <button type="button" onClick={handleBack} className="bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-400">Voltar</button>
                <button type="submit" className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700">Confirmar Pedido</button>
            </div>
          </form>
        );
        default: return null;
    }
  };
  
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Finalizar Compra</h1>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        {renderStep()}
      </div>
    </div>
  );
};

export default CheckoutPage;
