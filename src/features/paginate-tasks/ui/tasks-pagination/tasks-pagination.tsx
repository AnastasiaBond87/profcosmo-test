'use client';
import { ReactElement } from 'react';
import ArrowLeft from './assets/chevron-left.svg';
import ArrowRight from './assets/chevron-right.svg';
import { Button } from '@/shared/ui';
import { useTasksPagination } from '../../hooks';

import styles from './tasks-pagination.module.scss';

export const TasksPagination = (): ReactElement => {
  const { goNextPage, goPrevPage, isFirstPage, isLastPage, page, totalPages } =
    useTasksPagination();

  return (
    <div className={styles.pagination}>
      <Button
        className={styles.pagination__btn}
        variant="default"
        onClick={goPrevPage}
        data-disabled={isFirstPage}
      >
        <ArrowLeft width={20} height={20} />
      </Button>
      <p className={styles.pagination__page}>{`${page}/${totalPages}`}</p>
      <Button
        className={styles.pagination__btn}
        variant="default"
        onClick={goNextPage}
        data-disabled={isLastPage}
      >
        <ArrowRight width={20} height={20} />
      </Button>
    </div>
  );
};
