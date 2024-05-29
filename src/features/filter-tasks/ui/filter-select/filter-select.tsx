'use client';
import { Select } from '@/shared/ui';
import { useState, type ReactElement } from 'react';
import { setFilter, useAppDispatch } from '@/store';
import { FilterOption, FilterValue } from './types';
import { OPTIONS } from './constants';

export const FilterSelect = (): ReactElement => {
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState<FilterOption>(OPTIONS[0]);

  const handleChange = (option: FilterOption): void => {
    const { value } = option;

    setSelected(option);
    dispatch(setFilter(value));
  };

  return (
    <Select<FilterValue>
      options={OPTIONS}
      label="Status"
      selected={selected}
      onChange={handleChange}
    />
  );
};
