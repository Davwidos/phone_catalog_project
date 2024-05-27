import { FC } from 'react';
import './VariantsSection.scss';
import { ColorSelection } from '../ColorSelection/ColorSelection';
import { ParametrSelection } from '../ParametrSelection';
import { Button } from '../Buttons/Button';
import { ButtonHeart } from '../Buttons/ButtonHeart';
import { useProductDetails } from '../../provider/ProductDetailsProvider';

export const VariantsSection: FC = () => {
  const { details } = useProductDetails();

  return (
    <div className="VariantSection">
      <ColorSelection colors={details?.colorsAvailable || []} />
      <div className="VariantsSection__separator" />
      <ParametrSelection parametrs={details?.capacityAvailable || []} />
      <div className="VariantsSection__separator" />
      <div className="price">
        <span className="price__actual">{details?.priceDiscount}</span>
        <span className="price__prev">{details?.priceRegular}</span>
      </div>
      <div className="VariantsSection_buttons buttons">
        <Button className="buttons__add" primary>
          Add to cart
        </Button>
        <ButtonHeart style={{ width: 48, height: 48 }} />
      </div>
    </div>
  );
};
