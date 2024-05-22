import { FC } from 'react';
import { Button, Props } from '../Button';
import classNames from 'classnames';
import './ButtonCircle.scss';

export const ButtonCicirle: FC<Props> = ({
  active,
  className,
  children,
  ...props
}) => {
  return (
    <Button
      square
      {...props}
      className={classNames('ButtonCircle', { active }, className)}
    >
      <div className="ButtonCircle__inside"> {children}</div>
    </Button>
  );
};
