import React, { createContext, useState } from 'react';

export type ContextValueType = {
  addedIDS: number[];
  cartValue: number;
  handleAddToCart: (id: number) => void;
};

const MyContext = createContext<ContextValueType>({
  cartValue: 0,
  addedIDS: [],
  handleAddToCart: () => {},
});

type MyContextProviderProps = {
  children: React.ReactNode;
};

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [addedIDS, setAddedIDS] = useState<number[]>([]);
  const [cartValue, setCartValue] = useState<number>(0);

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
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyContext;
