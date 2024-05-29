import { type InputHTMLAttributes, type ReactElement, useId } from 'react';
import clsx from 'clsx';

import styles from './input.module.scss';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export const Input = ({
  label,
  error,
  type = 'text',
  className,
  ...props
}: InputProps): ReactElement => {
  const id = useId();

  return (
    <div className={clsx(styles.wrapper, className)} data-error={!!error}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input id={id} type={type} className={styles.input} {...props} />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
