'use client';
import { setCurrentTasks, useAppDispatch, useAppSelector } from '@/store';
import { useCallback, useEffect, useState } from 'react';

export const useTasksPagination = () => {
  const dispatch = useAppDispatch();
  const { tasks, filter, sort } = useAppSelector((store) => store.tasks);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const isLastPage = page === totalPages;
  const isFirstPage = page === 1;
  const TASKS_PER_PAGE = 3;

  const goPrevPage = (): void => {
    if (isFirstPage) return;
    setPage(page - 1);
  };

  const goNextPage = (): void => {
    if (isLastPage) return;
    setPage(page + 1);
  };

  const handlePaginate = useCallback(() => {
    const lastIdx = page * 3;
    const firstIdx = lastIdx - 3;

    const filtered = [...tasks]
      .sort((a, b) => {
        if (sort === 'email') return a.email.localeCompare(b.email);
        return a.title.localeCompare(b.title);
      })
      .filter(({ completed }) => {
        if (filter === 'completed') return completed;
        if (filter === 'incomplete') return !completed;
        return true;
      });

    const currentTasks = filtered.slice(firstIdx, lastIdx);
    const totalCount = Math.ceil(filtered.length / TASKS_PER_PAGE) || 1;

    dispatch(setCurrentTasks(currentTasks));
    setTotalPages(totalCount);
  }, [page, tasks, dispatch, filter, sort]);

  useEffect(() => {
    handlePaginate();
  }, [handlePaginate]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  return {
    goNextPage,
    goPrevPage,
    isFirstPage,
    isLastPage,
    page,
    totalPages,
  };
};
