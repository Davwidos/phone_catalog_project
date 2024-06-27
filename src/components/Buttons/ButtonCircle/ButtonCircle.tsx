import { FC } from 'react';
import { Button, Props as ButtonProps } from '../Button';
import classNames from 'classnames';
import './ButtonCircle.scss';

interface Props extends ButtonProps {
  color?: string;
}

export const ButtonCicirle: FC<Props> = ({
  active,
  className,
  color,
  children,
  ...props
}) => {
  return (
    <Button
      square
      {...props}
      className={classNames('ButtonCircle', { active }, className)}
    >
      <div className="ButtonCircle__inside" style={{ backgroundColor: color }}>
        {' '}
        {children}
      </div>
    </Button>
  );
};
