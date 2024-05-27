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
    <div className="price">
      <span className="price__actual">$799</span>
      <span className="price__prev">$1199</span>
    </div>
    <div className="VariantsSection_buttons buttons">
      <Button className="buttons__add" primary>
        Add to cart
      </Button>
      <ButtonHeart style={{ width: 48, height: 48 }} />
    </div>

    <div className="ProdctPage__short-specs short-specs">
      <div className="short-specs__spec">
        <p className="short-specs__title">Screen</p>
        <p className="short-specs__value">6.5” OLED</p>
      </div>
      <div className="short-specs__spec">
        <p className="short-specs__title">Resolution</p>
        <p className="short-specs__value">2688x1242</p>
      </div>
      <div className="short-specs__spec">
        <p className="short-specs__title">Processor</p>
        <p className="short-specs__value">Apple A12 Bionic</p>
      </div>
      <div className="short-specs__spec">
        <p className="short-specs__title">RAM</p>
        <p className="short-specs__value">3 GB</p>
      </div>
    </div>
  </div>
);
