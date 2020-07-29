import React, { createContext, useCallback, useState, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as navigation from './navigators';

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  // increment(id: string): void;
  // decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const ProviderCart: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addToCart = useCallback(
    async product => {
      const findProduct = products.find(item => item.id === product.id);

      if (findProduct) {
        const getProducts = products.map(item =>
          item.id === product.id
            ? { ...product, quantity: item.quantity + 1 }
            : { ...item },
        );

        setProducts(getProducts);
      } else {
        const newProduct = { ...product, quantity: 1 };

        setProducts([...products, newProduct]);
      }

      await AsyncStorage.setItem('@Kafiti:Items', JSON.stringify(products));
    },
    [products],
  );
  const value = React.useMemo(() => ({ addToCart, products }), [
    products,
    addToCart,
  ]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useToast must be used within a ToasProvider');
  }

  return context;
}

export { ProviderCart, useCart };
