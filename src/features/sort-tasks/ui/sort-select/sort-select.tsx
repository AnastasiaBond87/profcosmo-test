'use client';
import { Select } from '@/shared/ui';
import { useState, type ReactElement } from 'react';
import { setSort, useAppDispatch } from '@/store';
import { OPTIONS } from './constants';
import type { SortOption, SortValue } from './types';

export const SortSelect = (): ReactElement => {
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState<SortOption>(OPTIONS[0]);

  const handleChange = (option: SortOption): void => {
    const { value } = option;

    dispatch(setSort(value));
    setSelected(option);
  };

  return (
    <Select<SortValue> options={OPTIONS} label="Sort" selected={selected} onChange={handleChange} />
  );
};
