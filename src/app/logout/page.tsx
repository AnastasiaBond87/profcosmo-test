import { LogoutUser } from '@/features/logout';
import { type ReactElement } from 'react';
import Loader from '@/shared/assets/spinner.svg';

import styles from './page.module.scss';

const Logout = (): ReactElement => {
  return (
    <>
      <LogoutUser />
      <div className={styles.page}>
        <p className={styles.message}>Redirect to login page...</p>
        <Loader width={80} height={80} />
      </div>
    </>
  );
};

export default Logout;
