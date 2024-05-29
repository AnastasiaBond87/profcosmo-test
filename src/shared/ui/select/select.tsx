'use client';
import { useClickOutside } from '@/shared/hooks';
import { Button } from '../button';
import { type Option } from './types';

import styles from './select.module.scss';

type SelectProps<T> = {
  options: Option<T>[];
  label?: string;
  onChange: (option: Option<T>) => void;
  selected?: Option<T>;
};

export const Select = <T,>({ options, selected, onChange, label }: SelectProps<T>) => {
  const { ref, isOpen, setOpen } = useClickOutside<HTMLDivElement>();

  const toggleOpenSelect = (): void => setOpen((prev) => !prev);

  const handleOptionClick = (option: Option<T>): void => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div className={styles.wrapper} ref={ref}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.select}>
        <Button onClick={toggleOpenSelect} variant="default" className={styles.btn}>
          {selected?.title ?? ''}
        </Button>
        <div className={styles.dropdown} data-open={isOpen}>
          <ul className={styles.options}>
            {options.map((option) => (
              <li
                key={option.title}
                onClick={() => handleOptionClick(option)}
                className={styles.options__item}
              >
                {option.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
