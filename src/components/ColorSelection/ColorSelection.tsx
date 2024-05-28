import { FC, useCallback, useState } from 'react';
import { ButtonCicirle } from '../Buttons/ButtonCircle';
import './ColorSelection.scss';

interface Props {
  colors: string[];
}

export const ColorSelection: FC<Props> = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleSelectColor = useCallback(
    (color: string) => () => setSelectedColor(color),
    [setSelectedColor],
  );

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
            onClick={handleSelectColor(color)}
            active={selectedColor === color}
          />
        ))}
      </div>
    </div>
  );
};
