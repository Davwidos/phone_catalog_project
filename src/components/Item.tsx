import React, { useContext } from 'react';
import MyContext, { ContextValueType } from '../provider/CartProvider';

type Props = {
  id: number;
};

const Item: React.FC<Props> = ({ id }) => {
  const { addedIDS, handleAddToCart } = useContext<ContextValueType>(MyContext);
  const price = id * 10;

  return (
    <>
      <button onClick={() => handleAddToCart(id)}>
        {addedIDS.includes(id) ? `Added to cart` : `Add to cart`}
      </button>
      Price: {price}
    </>
  );
};

export default Item;
