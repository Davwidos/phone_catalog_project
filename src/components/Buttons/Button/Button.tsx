import React, { ButtonHTMLAttributes, FC } from 'react';
import './Button.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  active?: true;
  primary?: true;
  square?: true;
  width?: number;
  to?: string;
  children?: React.ReactNode;
}

export const Button: FC<Props> = ({
  active,
  primary,
  square,
  width,
  to,
  children,
  className,
  ...props
}) => {
  if (to) {
    return (
      <Link
        to={to}
        style={{ width }}
        className={classNames(
          'button',
          { 'button--primary': primary },
          { active },
          { 'button--square': square },
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
      style={{ width }}
      className={classNames(
        'button',
        { 'button--primary': primary },
        { active },
        { 'button--square': square },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
