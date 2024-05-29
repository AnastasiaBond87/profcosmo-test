'use client';
import { useAppSelector } from '@/store';
import { ReactElement } from 'react';
import { TaskItem } from './ui';

import styles from './task.module.scss';

export const Tasks = (): ReactElement => {
  const { currentTasks } = useAppSelector((store) => store.tasks);

  if (!currentTasks.length) {
    return <p>No data</p>;
  }

  return (
    <ul className={styles.tasks}>
      {currentTasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </ul>
  );
};
