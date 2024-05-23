import { FC, useCallback, useState } from 'react';
import { ButtonCicirle } from '../Buttons/ButtonCircle';
import './ColorSelection.scss';

const colors = ['#FCDBC1', '#5F7170', '#4C4C4C', '#F0F0F0'];

export const ColorSelection: FC = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleSelectColor = useCallback(
    (color: string) => () => setSelectedColor(color),
    [setSelectedColor],
  );

  return (
    <div className="ColorSelection">
      <div className="ColorSelection__container ColorSelection__container--1">
        <h5 className="title">Available colors</h5>
        <p className="id">ID: 802390</p>
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
