import { AuthForm } from '@/features/auth';
import { ReactElement } from 'react';

import styles from './page.module.scss';

const Login = (): ReactElement => (
  <div className={styles.page}>
    <AuthForm />
  </div>
);

export default Login;
