import { FC, useCallback, useState } from 'react';
import { Button } from '../Buttons/Button';
import './ParametrSelection.scss';

const parametrs = ['64 GB', '256 GB', '512 GB'];

export const ParametrSelection: FC = () => {
  const [selected, setSelected] = useState(parametrs[0]);

  const handleSelectParametr = useCallback(
    (p: string) => () => setSelected(p),
    [setSelected],
  );

  return (
    <div className="ParametrSelection">
      <h5 className="title">Select capacity</h5>
      <div className="ParametrSelection__container">
        {parametrs.map(p => (
          <Button
            key={p}
            className="ParametrSelection__item"
            square
            onClick={handleSelectParametr(p)}
            active={selected === p}
          >
            {p}
          </Button>
        ))}
      </div>
    </div>
  );
};
