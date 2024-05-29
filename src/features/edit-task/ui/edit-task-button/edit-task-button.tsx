import { Cookies, ROLE } from '@/shared/constants';
import { Button } from '@/shared/ui';
import { useAppDispatch, toggleEditTask, editTask } from '@/store';
import { getCookie } from 'cookies-next';
import { type ReactElement } from 'react';

type EditTaskButtonProps = {
  taskId: number;
  isEditable: boolean;
  isCompleted: boolean;
  description: string;
};

export const EditTaskButton = ({
  taskId,
  isEditable,
  description,
  isCompleted,
}: EditTaskButtonProps): ReactElement | null => {
  const dispatch = useAppDispatch();

  const isAdmin = getCookie(Cookies.ROLE) === ROLE.ADMIN;
  const name = isEditable ? 'Save' : 'Edit';

  if (!isAdmin) return null;

  const handleClick = (): void => {
    if (!isEditable) {
      dispatch(toggleEditTask({ id: taskId }));
      return;
    }

    dispatch(editTask({ id: taskId, description, completed: isCompleted }));
  };

  return <Button onClick={handleClick}>{name}</Button>;
};
