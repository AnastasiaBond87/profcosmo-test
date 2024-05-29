'use client';
import { type ReactElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, FormInput } from '@/shared/ui';
import clsx from 'clsx';
import { useAppDispatch, createTask } from '@/store';
import { type TaskFormFields } from './types';
import { defaultValues } from './constants';
import { $TaskFormSchema } from './schema';

import styles from './task-form.module.scss';

export const TaskForm = (): ReactElement => {
  const dispatch = useAppDispatch();

  const { control, handleSubmit, reset } = useForm<TaskFormFields>({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver($TaskFormSchema),
  });

  const onSubmit: SubmitHandler<TaskFormFields> = (values): void => {
    dispatch(createTask(values));
    reset();
  };

  return (
    <div className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}>Create task</h2>
      <form className={styles.form}>
        <div className={styles.form__inputs}>
          <FormInput
            name="title"
            control={control}
            label="Title"
            className={clsx(styles.form__input, styles.form__input_title)}
          />
          <FormInput
            name="email"
            control={control}
            label="Email"
            className={clsx(styles.form__input, styles.form__input_email)}
          />
          <FormInput
            name="description"
            control={control}
            label="Description"
            className={clsx(styles.form__input, styles.form__input_task)}
          />
        </div>
        <Button className={styles.form__btn} type="submit">
          Add task
        </Button>
      </form>
    </div>
  );
};
