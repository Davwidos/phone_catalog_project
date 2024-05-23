import { FC } from 'react';
import { Button, Props } from '../Button';
import classNames from 'classnames';
import './ButtonHeart.scss';

export const ButtonHeart: FC<Props> = ({ active, className, ...props }) => {
  return (
    <Button
      square
      {...props}
      className={classNames('ButtonHeart', { active }, className)}
    >
      <div className={classNames('ButtonHeart__icon', { active })} />
    </Button>
  );
};
