'use client';
import { Button } from '@/shared/ui';
import { ReactElement } from 'react';
import { useRouter } from 'next/navigation';
import Logout from './assets/logout.svg';

import styles from './logout-button.module.scss';

export const LogoutButton = (): ReactElement => {
  const { push } = useRouter();

  const handleClick = (): void => {
    push('/logout');
  };

  return (
    <Button variant="secondary" className={styles.btn} onClick={handleClick}>
      <Logout className={styles.btn__icon} />
      <span className={styles.btn__title}>Log out</span>
    </Button>
  );
};
