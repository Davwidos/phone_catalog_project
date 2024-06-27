import { FC } from 'react';
import { ButtonCicirle } from '../Buttons/ButtonCircle';
import './ColorSelection.scss';
import { ProductDetails } from '../../types/ProductDetails';
import { createProductLink } from '../../utils/createProductLink';

interface Props {
  details: ProductDetails;
}

export const ColorSelection: FC<Props> = ({ details }) => {
  const selectedColor = details.color;
  const colors = details.colorsAvailable;

  return (
    <div className="ColorSelection">
      <div className="ColorSelection__container ColorSelection__container--1">
        <h5 className="color-title">Available colors</h5>
        <p className="color-id">ID: 802390</p>
      </div>
      <div className="ColorSelection__container ColorSelection__container--2">
        {colors.map(color => (
          <ButtonCicirle
            key={color}
            color={color}
            to={createProductLink(
              details.category,
              details.namespaceId,
              details.capacity,
              color,
            )}
            active={selectedColor === color}
          />
        ))}
      </div>
    </div>
  );
};
