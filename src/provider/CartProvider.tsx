import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Product } from '../types/Product';

type ContextValueType = {
  cartValue: number;
  cartItems: Product[];
  handleAddToCart: (product: Product) => void;
  decreaseAmount: (id: number, amount?: number) => void;
  removeItem: (id: number) => void;
};

const CartContext = createContext<ContextValueType>({
  cartValue: 0,
  cartItems: [],
  handleAddToCart: () => {},
  decreaseAmount: () => {},
  removeItem: () => {},
});

type MyContextProviderProps = {
  children: React.ReactNode;
};

const CartProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const cartValue = useMemo(
    () =>
      Array.isArray(cartItems)
        ? cartItems.reduce(
            (prev, curr) => prev + curr.price * (curr.amount ?? 0),
            0,
          )
        : 0,
    [cartItems],
  );

  useEffect(() => {
    const cartItemsStr = localStorage.getItem('cartItems');

    if (cartItemsStr) {
      setCartItems(JSON.parse(cartItemsStr));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = useCallback(
    (product: Product) => {
      setCartItems(prev => {
        const existingProduct = prev.find(p => p.id === product.id);

        if (existingProduct) {
          return prev.map(p =>
            p.id === product.id ? { ...p, amount: (p.amount ?? 0) + 1 } : p,
          );
        }

        return [...prev, { ...product, amount: 1 }];
      });
    },
    [setCartItems],
  );

  const removeItem = useCallback(
    (id: number) => {
      setCartItems(prev => prev.filter(p => p.id !== id));
    },
    [setCartItems],
  );

  const decreaseAmount = useCallback(
    (id: number, amount = 1) => {
      setCartItems(prev =>
        prev.map(p => {
          if (p.id === id) {
            const currentAmount = p.amount ?? 0;

            if (currentAmount <= amount) {
              removeItem(id);

              return { ...p, amount: 0 };
            }

            return { ...p, amount: currentAmount - amount };
          }

          return p;
        }),
      );
    },
    [removeItem],
  );

  const contextValue: ContextValueType = {
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
