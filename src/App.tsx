import React, { useState } from 'react';
import './App.scss';
type Props = {
  id: number;
  addedIDS: number[];
  handleClick: (id: number) => void;
};
const Item: React.FC<Props> = ({ id, addedIDS, handleClick }) => {
  return (
    <button onClick={() => handleClick(id)}>
      {addedIDS.includes(id) ? `Add to cart` : `Added to cart`}
    </button>
  );
};
export const App = () => {
  const [addedIDS, setAddedIDS] = useState<number[]>([]); //dodajemy telefony, ktorych przycisk został naciśnięty po ID
  const handleClick = (id: number) => {
    if (addedIDS.includes(id)) {
      setAddedIDS(prev => prev.filter(searched => searched !== id));
    } else {
      setAddedIDS(prev => [...prev, id]);
    }
  };

  return (
    <div className="App">
      <h1>Product Catalog</h1>
      <Item id={2} addedIDS={addedIDS} handleClick={handleClick} />
      <Item id={3} addedIDS={addedIDS} handleClick={handleClick} />
    </div>
  );
};
