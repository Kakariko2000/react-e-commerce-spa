
import { PRODUCTS } from '../constants';
import { Product } from '../types';

const SIMULATED_DELAY = 500;

export const productService = {
  getProducts: async (): Promise<Product[]> => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(PRODUCTS);
      }, SIMULATED_DELAY);
    });
  },
  getProductById: async (id: number): Promise<Product | undefined> => {
    return new Promise(resolve => {
      setTimeout(() => {
        const product = PRODUCTS.find(p => p.id === id);
        resolve(product);
      }, SIMULATED_DELAY);
    });
  },
};
