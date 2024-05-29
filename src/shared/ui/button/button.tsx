import type { ButtonHTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import clsx from 'clsx';

import styles from './button.module.scss';

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  variant?: 'primary' | 'secondary' | 'default';
};

export const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  className,
  ...props
}: ButtonProps): ReactElement => (
  <button
    type={type}
    className={clsx(
      styles.btn,
      {
        [styles.btn_default]: variant === 'default',
        [styles.btn_primary]: variant === 'primary',
        [styles.btn_secondary]: variant === 'secondary',
      },
      className,
    )}
    {...props}
  >
    {children}
  </button>
);
