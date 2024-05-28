import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Product } from '../types/Product';

type FavouritesValueType = {
  favourites: Product[];
  handleAddToFavourites: (product: Product) => void;
};

const FavouritesContext = createContext<FavouritesValueType>({
  favourites: [],
  handleAddToFavourites: () => {},
});

type MyContextProviderProps = {
  children: React.ReactNode;
};

export const FavouritesProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [favourites, setFavourites] = useState<Product[]>([]);

  useEffect(() => {
    const favouritesIdsStr = localStorage.getItem('favouritesIds');

    if (favouritesIdsStr) {
      setFavourites(JSON.parse(favouritesIdsStr));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favouritesIds', JSON.stringify(favourites));
  }, [favourites]);

  const handleAddToFavourites = useCallback((product: Product) => {
    setFavourites(prev =>
      prev.some(p => p.id === product.id)
        ? prev.filter(searched => searched.id !== product.id)
        : [...prev, product],
    );
  }, []);

  const contextValue: FavouritesValueType = {
    favourites: favourites,
    handleAddToFavourites,
  };

  return (
    <FavouritesContext.Provider value={contextValue}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouritesContext);

export default FavouritesProvider;
