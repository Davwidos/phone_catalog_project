import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { CartItem } from '../types/CartItem';

type ContextValueType = {
  cartValue: number;
  cartItems: CartItem[];
  toggleAddToCart: (product: CartItem) => void;
  decreaseAmount: (id: number, amount?: number) => void;
  removeItem: (id: number) => void;
  increaseAmount: (id: number, amount?: number) => void;
};

const CartContext = createContext<ContextValueType>({
  cartValue: 0,
  cartItems: [],
  toggleAddToCart: () => {},
  decreaseAmount: () => {},
  removeItem: () => {},
  increaseAmount: () => {},
});

type MyContextProviderProps = {
  children: React.ReactNode;
};

const CartProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartValue = useMemo(
    () =>
      cartItems.reduce(
        (prev, curr) => prev + curr.price * (curr.amount || 0),
        0,
      ),
    [cartItems],
  );

  useEffect(() => {
    const cartIemsStr = localStorage.getItem('cartItems');

    if (cartIemsStr) {
      setCartItems(JSON.parse(cartIemsStr));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const toggleAddToCart = useCallback(
    (product: CartItem) => {
      setCartItems(prev => {
        return prev.some(p => p.id === product.id)
          ? prev.filter(p => p.id !== product.id)
          : [...prev, product];
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
            if (!p.amount || p.amount <= amount) {
              removeItem(id);

              return p;
            }

            return { ...p, amount: p?.amount - amount };
          }

          return p;
        }),
      );
    },
    [removeItem],
  );

  const increaseAmount = useCallback(
    (id: number, amount = 1) => {
      setCartItems(prev =>
        prev.map(p => {
          if (p.id === id) {
            return { ...p, amount: (p.amount || 0) + amount };
          }
          return p;
        }),
      );
    },
    [setCartItems],
  );

  const contextValue: ContextValueType = {
    cartValue,
    cartItems,
    toggleAddToCart,
    decreaseAmount,
    removeItem,
    increaseAmount,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
