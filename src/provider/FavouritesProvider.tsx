import React, { createContext, useContext, useState } from 'react';

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
  const [favouritesIDS, setFavouritesIDS] = useState([1, 2, 3]);

  const handleAddToFavourites = (id: number) => {
    if (favouritesIDS.includes(id)) {
      setFavouritesIDS(prev => prev.filter(searched => searched !== id));
    } else {
      setFavouritesIDS(prev => [...prev, id]);
    }
  };
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
