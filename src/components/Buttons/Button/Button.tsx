import React, { ButtonHTMLAttributes, FC } from 'react';
import './Button.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  active?: true;
  primary?: true;
  square?: true;
  to?: string;
  children?: React.ReactNode;
}

export const Button: FC<Props> = ({
  active,
  primary,
  square,
  to,
  children,
  className,
  ...props
}) => {
  if (to) {
    return (
      <Link
        to={to}
        className={classNames(
          'Button',
          { 'Button--primary': primary },
          { active },
          { 'Button--square': square },
          className,
        )}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classNames(
        'Button',
        { 'Button--primary': primary },
        { active },
        { 'Button--square': square },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
