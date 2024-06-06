import { clsx } from 'clsx';

import classes from './Button.module.scss';

import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[];
  className?: string;
}

export const Button = ({ children, className, ...other }: IButtonProps): JSX.Element => {
  return (
    <button className={clsx(classes.button, className)} {...other}>
      {children}
    </button>
  );
};
