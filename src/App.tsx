import React, { useState } from 'react';
import './App.scss';
type Props = {
  id: number;
  addedIDS: number[];
  handleClick: (id: number) => void;
};
const Item: React.FC<Props> = ({ id, addedIDS, handleClick }) => {
  const price = id * 10;

  return (
    <>
      <button onClick={() => handleClick(id)}>
        {addedIDS.includes(id) ? `Added to cart` : `Add to cart`}
      </button>
      Price: {price}
    </>
  );
};

export const App = () => {
  const [addedIDS, setAddedIDS] = useState<number[]>([]); //dodajemy telefony, ktorych przycisk został naciśnięty po ID
  const [cartValue, setCartValue] = useState(0);
  const handleClick = (id: number) => {
    const price = id * 10;

    if (addedIDS.includes(id)) {
      setAddedIDS(prev => prev.filter(searched => searched !== id));
      setCartValue(prev => prev - price);
    } else {
      setAddedIDS(prev => [...prev, id]);
      setCartValue(prev => prev + price);
    }
  };

  return (
    <div className="App">
      <h1>Product Catalog</h1>
      <Item id={3} addedIDS={addedIDS} handleClick={handleClick} />
      <Item id={5} addedIDS={addedIDS} handleClick={handleClick} />
      <br />
      Total cost: {cartValue}
    </div>
  );
};
