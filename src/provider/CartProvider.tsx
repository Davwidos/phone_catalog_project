import React, { createContext, useContext, useEffect, useState } from 'react';

type ContextValueType = {
  addedIDS: Record<number, number>;
  cartValue: number;
  handleAddToCart: (id: number) => void;
  decreaseAmount: (id: number, amount?: number) => void;
  removeItem: (id: number) => void;
};

const CartContext = createContext<ContextValueType>({
  cartValue: 0,
  addedIDS: [],
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

  useEffect(() => {
    const idsStr = localStorage.getItem('cartItems');
    const cartValStr = localStorage.getItem('cartValue');

    if (idsStr) {
      setAddedIDS(JSON.parse(idsStr));
    }

    if (cartValStr) {
      setCartValue(+cartValStr);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(addedIDS));
  }, [addedIDS]);

  useEffect(() => {
    localStorage.setItem('cartValue', cartValue.toString());
  }, [cartValue]);

  const handleAddToCart = (id: number) => {
    setAddedIDS(prev => {
      const productCount = prev[id];

      return productCount
        ? { ...prev, [id]: productCount + 1 }
        : { ...prev, [id]: 1 };
    });

    setCartValue(prev => prev + id * 10);
  };

  const removeItem = (id: number) => {
    setAddedIDS(prev => {
      const { [id]: count, ...rest } = prev;

      setCartValue(val => (count ? val - count * 10 * id : val));

      return { ...rest };
    });
  };

  const decreaseAmount = (id: number, amount = 1) => {
    setAddedIDS(prev => {
      const productAmount = prev[id];

      if (productAmount && productAmount > amount) {
        setCartValue(val => val - amount * id * 10);

        return { ...prev, [id]: productAmount - amount };
      } else if (productAmount) {
        const { [id]: count, ...rest } = prev;

        setCartValue(val => (count ? val - count * 10 * id : val));

        return { ...rest };
      }

      return prev;
    });
  };

  const contextValue: ContextValueType = {
    addedIDS,
    cartValue,
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
