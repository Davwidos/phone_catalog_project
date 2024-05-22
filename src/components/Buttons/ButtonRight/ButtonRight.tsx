import { FC } from 'react';
import { Button, Props } from '../Button/Button';
import './ButtonRight.scss';
import classNames from 'classnames';

export const ButtonRight: FC<Props> = ({ active, ...props }) => {
  return (
    <Button className="ButtonRight" square active={active} {...props}>
      <div className={classNames('ButtonRight__icon', { active })} />
    </Button>
  );
};
