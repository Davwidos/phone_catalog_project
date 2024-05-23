import { FC } from 'react';
import './VariantsSection.scss';
import { ColorSelection } from '../ColorSelection/ColorSelection';
import { ParametrSelection } from '../ParametrSelection';
import { Button } from '../Buttons/Button';
import { ButtonHeart } from '../Buttons/ButtonHeart';

export const VariantsSection: FC = () => (
  <div className="VariantSection">
    <ColorSelection />
    <div className="VariantsSection__separator" />
    <ParametrSelection />
    <div className="VariantsSection__separator" />
    <div className="VariantsSection_buttons buttons">
      <Button className="buttons__add" primary>
        Add to cart
      </Button>
      <ButtonHeart style={{ width: 48, height: 48 }} />
    </div>
  </div>
);
