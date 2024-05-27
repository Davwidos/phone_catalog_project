import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

type FavouritesValueType = {
  favouritesIDS: number[];
  handleAddToFavourites: (id: number) => void;
};

const FavouritesContext = createContext<FavouritesValueType>({
  favouritesIDS: [],
  handleAddToFavourites: () => {},
});

type MyContextProviderProps = {
  children: React.ReactNode;
};

export const FavouritesProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [favouritesIDS, setFavouritesIDS] = useState<number[]>([]);

  useEffect(() => {
    const favouritesIdsStr = localStorage.getItem('favouritesIds');

    if (favouritesIdsStr) {
      setFavouritesIDS(JSON.parse(favouritesIdsStr));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favouritesIds', JSON.stringify(favouritesIDS));
  }, [favouritesIDS]);

  const handleAddToFavourites = useCallback((id: number) => {
    setFavouritesIDS(prev =>
      prev.includes(id)
        ? prev.filter(searched => searched !== id)
        : [...prev, id],
    );
  }, []);

  const contextValue: FavouritesValueType = {
    favouritesIDS,
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
