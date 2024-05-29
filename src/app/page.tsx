import { TaskForm } from '@/features/create-task';
import { type ReactElement } from 'react';
import dynamic from 'next/dynamic';
import { TasksPagination } from '@/features/paginate-tasks';
import { LogoutButton } from '@/features/logout';
import Loader from '@/shared/assets/spinner.svg';
import { FilterSelect } from '@/features/filter-tasks';
import { SortSelect } from '@/features/sort-tasks';

import styles from './page.module.scss';

const Tasks = dynamic(() => import('@/widgets').then((res) => res.Tasks), {
  ssr: false,
  loading: () => <Loader width={50} height={50} />,
});

const Home = (): ReactElement => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <LogoutButton />
      </header>
      <div className={styles.content}>
        <TaskForm />
        <div className={styles.divider} />
        <div className={styles.actions}>
          <div className={styles.actions__filter}>
            <FilterSelect />
            <SortSelect />
          </div>
          <TasksPagination />
        </div>
        <div className={styles.divider} />
        <Tasks />
      </div>
    </div>
  );
};

export default Home;
