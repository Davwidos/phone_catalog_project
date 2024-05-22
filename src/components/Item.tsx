import React, { useContext } from 'react';
import MyContext from '../provider/Provider';

type Props = {
  id: number;
};

const Item: React.FC<Props> = ({ id }) => {
  const { addedIDS, handleClick } = useContext(MyContext);
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

export default Item;
