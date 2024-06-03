import { PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { CartItem } from '../../types/CartItem';
import { Product } from '../../types/Product';
import { startListening } from '../../app/listenerMiddleware';
import { RootState } from '../../app/store';

const getCartItems = () => {
  const cartString = localStorage.getItem('cart');

  return cartString ? JSON.parse(cartString) : [];
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartItems() as CartItem[],
  reducers: {
    toggleItem: (state, action: PayloadAction<Product>) => {
      let containsItem = false;

      const newState = state.filter(p => {
        if (p.id === action.payload.id) {
          containsItem = true;

          return false;
        }

        return true;
      });

      if (!containsItem) {
        newState.push({ ...action.payload, amount: 1 });
      }

      return newState;
    },
    increaseAmount: (state, action: PayloadAction<number>) => {
      const item = state.find(p => p.id === action.payload);

      if (item?.amount) {
        item.amount++;
      }
    },
    decreaseAmount: (state, action: PayloadAction<number>) => {
      const item = state.find(p => p.id === action.payload);

      if (item?.amount) {
        item.amount--;
      }
    },
    removeItem: (state, action: PayloadAction<number>) =>
      state.filter(p => p.id !== action.payload),
    clear: () => [],
  },
});

export const {
  toggleItem: toogleItem,
  increaseAmount,
  decreaseAmount,
  removeItem,
  clear,
} = cartSlice.actions;

startListening({
  matcher: isAnyOf(...Object.values(cartSlice.actions)),
  effect: (_action, listenerApi) => {
    localStorage.setItem(
      'cart',
      JSON.stringify((listenerApi.getState() as RootState).cart),
    );
  },
});

export default cartSlice.reducer;
