import { FC } from 'react';
import { Item } from '../../types/Product';
import './About.scss';

interface Props {
  details?: Item;
}

export const About: FC<Props> = ({ details }) => {
  return (
    <div className="about">
      <h1 className="about__title title">About</h1>

      {details?.description.map(d => (
        <div key={d.title} className="about__section">
          <h4 className="about__subtitle">{d.title}</h4>
          <p className="about__text">{d.text.join('/n')}</p>
        </div>
      ))}
    </div>
  );
};
