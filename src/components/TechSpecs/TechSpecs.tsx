import { FC } from 'react';
import './TechSpecs.scss';
import { PhoneDetails } from '../../types/PhoneDetails';
import { TabletDetails } from '../../types/TabletDetails';
import { AccesoryDetails } from '../../types/AccesoryDetails';

interface Props {
  details?: PhoneDetails | TabletDetails | AccesoryDetails;
}

export const TechSpecs: FC<Props> = ({ details }) => {
  return (
    <div className="techSpecs">
      <h1 className="techSpecs__title">Tech specs</h1>

      <div className="techSpecs__row">
        <p className="techSpecs__row--title">Screen</p>
        <p className="techSpecs__row--value">{details?.screen}</p>
      </div>

      <div className="techSpecs__row">
        <p className="techSpecs__row--title">Resolution</p>
        <p className="techSpecs__row--value">{details?.resolution}</p>
      </div>

      <div className="techSpecs__row">
        <p className="techSpecs__row--title">Processor</p>
        <p className="techSpecs__row--value">{details?.processor}</p>
      </div>

      <div className="techSpecs__row">
        <p className="techSpecs__row--title">RAM</p>
        <p className="techSpecs__row--value">{details?.ram}</p>
      </div>

      <div className="techSpecs__row">
        <p className="techSpecs__row--title">Built in memory</p>
        <p className="techSpecs__row--value">{details?.capacity}</p>
      </div>

      {details?.category !== 'accessories' && (
        <>
          <div className="techSpecs__row">
            <p className="techSpecs__row--title">Camera</p>
            <p className="techSpecs__row--value">{details?.camera}</p>
          </div>
          <div className="techSpecs__row">
            <p className="techSpecs__row--title">Zoom</p>
            <p className="techSpecs__row--value">{details?.zoom}</p>
          </div>
        </>
      )}

      <div className="techSpecs__row">
        <p className="techSpecs__row--title">Cell</p>
        <p className="techSpecs__row--value">{details?.cell.join(', ')}</p>
      </div>
    </div>
  );
};
