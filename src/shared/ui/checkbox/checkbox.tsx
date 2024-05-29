import { useId } from 'react';
import Check from './assets/check.svg';

import styles from './checkbox.module.scss';

type CheckboxProps = {
  label?: string;
  checked: boolean;
  onClick: () => void;
};

export const Checkbox = ({ label, checked, onClick }: CheckboxProps) => {
  const id = useId();

  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div className={styles.checkbox} role="checkbox" aria-checked={checked} aria-labelledby={id}>
        {checked ? <Check className={styles.icon} /> : null}
      </div>
      {label ? (
        <label id={id} className={styles.label}>
          {label}
        </label>
      ) : null}
    </div>
  );
};
