'use client';
import { ReactElement, useState } from 'react';
import { Button, FormInput } from '@/shared/ui';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { Cookies } from '@/shared/constants';
import { AuthFormFields } from './types';
import { defaultValues } from './constants';
import { $AuthFormSchema } from './schema';
import { login } from '../../api';

import styles from './auth-form.module.scss';

export const AuthForm = (): ReactElement => {
  const { push } = useRouter();
  const [error, setError] = useState('');

  const { control, handleSubmit, reset } = useForm<AuthFormFields>({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver($AuthFormSchema),
  });

  const onSubmit: SubmitHandler<AuthFormFields> = async (data): Promise<void> => {
    setError('');

    try {
      const { role } = await login(data);
      setCookie(Cookies.ROLE, role, { maxAge: 60 * 60 * 1000 });
      push('/');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'UNKNOWN_ERROR';
      setError(message);
    }
  };

  const handleReset = (): void => {
    reset();
    setError('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form__inputs}>
        <FormInput
          control={control}
          name="email"
          label="Email"
          autoComplete="email"
          placeholder="Enter email..."
        />
        <FormInput
          control={control}
          name="password"
          label="Password"
          autoComplete="new-password"
          placeholder="Enter password..."
        />
      </div>
      <div className={styles.form__actions}>
        <Button type="submit">Sign in</Button>
        <Button onClick={handleReset} variant="secondary">
          Reset
        </Button>
      </div>
      {error && <span className={styles.form__error}>{error}</span>}
    </form>
  );
};
