import { ButtonHTMLAttributes, FC } from 'react';
import { Button } from '../Button/Button';
import './ButtonRight.scss';
import classNames from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: true;
}

export const ButtonRight: FC<Props> = ({ active, ...props }) => {
  return (
    <Button square active={active} {...props}>
      <div className={classNames('icon', { active })} />
    </Button>
  );
};
