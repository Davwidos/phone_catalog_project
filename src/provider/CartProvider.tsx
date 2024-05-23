import React, { createContext, useContext, useEffect, useState } from 'react';

type ContextValueType = {
  addedIDS: number[];
  cartValue: number;
  handleAddToCart: (id: number) => void;
};

const CartContext = createContext<ContextValueType>({
  cartValue: 0,
  addedIDS: [],
  handleAddToCart: () => {},
});

type MyContextProviderProps = {
  children: React.ReactNode;
};

const CartProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [addedIDS, setAddedIDS] = useState<Record<number, number>>({});
  const [cartValue, setCartValue] = useState<number>(0);

  useEffect(() => {
    const idsStr = localStorage.getItem('cartItems');
    const cartValStr = localStorage.getItem('cartValue');

    if (idsStr) {
      setAddedIDS(JSON.parse(idsStr));
    }

    if (cartValStr) {
      setCartValue(+cartValStr)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(addedIDS));
  }, [addedIDS]);

  useEffect(() => {
    localStorage.setItem('cartValue', cartValue.toString());
  }, [cartValue]);

  const handleAddToCart = (id: number) => {
    const price = id * 10;

    if (addedIDS.includes(id)) {
      setAddedIDS(prev => prev.filter(searched => searched !== id));
      setCartValue(prev => prev - price);
    } else {
      setAddedIDS(prev => [...prev, id]);
      setCartValue(prev => prev + price);
    }
  };

  const contextValue: ContextValueType = {
    addedIDS,
    cartValue,
    handleAddToCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
