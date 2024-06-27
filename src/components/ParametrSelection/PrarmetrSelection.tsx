import { FC } from 'react';
import { Button } from '../Buttons/Button';
import './ParametrSelection.scss';
import { ProductDetails } from '../../types/ProductDetails';
import { createProductLink } from '../../utils/createProductLink';

interface Props {
  details: ProductDetails;
}

export const ParametrSelection: FC<Props> = ({ details }) => {
  return (
    <div className="ParametrSelection">
      <h5 className="title">Select capacity</h5>
      <div className="ParametrSelection__container">
        {details.capacityAvailable.map(p => (
          <Button
            key={p}
            className="ParametrSelection__item"
            square
            to={createProductLink(
              details.category,
              details.namespaceId,
              p,
              details.color,
            )}
            active={details.capacity === p}
          >
            {p}
          </Button>
        ))}
      </div>
    </div>
  );
};
