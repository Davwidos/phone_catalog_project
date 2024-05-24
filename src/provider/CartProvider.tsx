import React, { createContext, useContext, useEffect, useState } from 'react';
import { Product } from '../types/Product';

type ContextValueType = {
  addedIDS: Record<number, number>;
  cartValue: number;
  cartItems: Product[];
  handleAddToCart: (id: number, price: number) => void;
  decreaseAmount: (id: number, amount?: number) => void;
  removeItem: (id: number) => void;
};

const CartContext = createContext<ContextValueType>({
  cartValue: 0,
  addedIDS: {},
  cartItems: [],
  handleAddToCart: () => {},
  decreaseAmount: () => {},
  removeItem: () => {},
});

type MyContextProviderProps = {
  children: React.ReactNode;
};

const CartProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [addedIDS, setAddedIDS] = useState<Record<number, number>>({});
  const [cartValue, setCartValue] = useState<number>(0);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const idsStr = localStorage.getItem('addedIDS');
    const cartValStr = localStorage.getItem('cartValue');
    const cartIemsStr = localStorage.getItem('cartItems');

    if (idsStr) {
      setAddedIDS(JSON.parse(idsStr));
    }

    if (cartValStr) {
      setCartValue(+cartValStr);
    }

    if (cartIemsStr) {
      setCartItems(JSON.parse(cartIemsStr));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('addedIDS', JSON.stringify(addedIDS));
  }, [addedIDS]);

  useEffect(() => {
    localStorage.setItem('cartValue', cartValue.toString());
  }, [cartValue]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (id: number, price: number) => {
    setAddedIDS(prev => {
      const productCount = prev[id];

      return productCount
        ? { ...prev, [id]: productCount + 1 }
        : { ...prev, [id]: 1 };
    });

    setCartValue(prev => prev + price);

    setCartItems(prev => {
      const itemIndex = prev.findIndex(item => item.id === id);

      if (itemIndex >= 0) {
        const updatedItems = [...prev];

        updatedItems[itemIndex].price += price;

        return updatedItems;
      } else {
        return [...prev, { id, price }];
      }
    });
  };

  const removeItem = (id: number) => {
    setAddedIDS(prev => {
      const { [id]: count, ...rest } = prev;

      setCartValue(val => (count ? val - count * id : val));

      return { ...rest };
    });

    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const decreaseAmount = (id: number, amount = 1) => {
    setAddedIDS(prev => {
      const productAmount = prev[id];

      if (productAmount && productAmount > amount) {
        setCartValue(val => val - amount * id);

        return { ...prev, [id]: productAmount - amount };
      } else if (productAmount) {
        const { [id]: count, ...rest } = prev;

        setCartValue(val => (count ? val - count * id : val));

        return { ...rest };
      }

      return prev;
    });

    // setCartItems(prev => {
    //   const itemIndex = prev.findIndex(item => item.id === id);

    //   if (itemIndex >= 0) {
    //     const updatedItems = [...prev];

    //     updatedItems[itemIndex].price -= amount * id;
    //     if (updatedItems[itemIndex].price <= 0) {
    //       updatedItems.splice(itemIndex, 1);
    //     }

    //     return updatedItems;
    //   }

    //   return prev;
    // });
  };

  const contextValue: ContextValueType = {
    addedIDS,
    cartValue,
    cartItems,
    handleAddToCart,
    decreaseAmount,
    removeItem,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
