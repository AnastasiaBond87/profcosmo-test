import { EditTaskButton } from '@/features/edit-task';
import { type Task } from '@/store';
import { ChangeEventHandler, ReactElement, useState } from 'react';
import { Checkbox } from '@/shared/ui';
import XCircle from './assets/x-circle.svg';
import CheckCircle from './assets/check-circle.svg';

import styles from './task-item.module.scss';

type TaskItemProps = {
  task: Task;
};

export const TaskItem = ({ task }: TaskItemProps): ReactElement => {
  const { title, email, description, id, editable, completed } = task;
  const [content, setContent] = useState(description);
  const [isCompleted, setCompleted] = useState(completed);

  const toggleTaskCompleted = (): void => {
    setCompleted((prev) => !prev);
  };

  const handleEditDescription: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const { value } = event.target;
    setContent(value);
  };

  return (
    <li className={styles.task}>
      <div className={styles.task__header}>
        <div className={styles.task__info}>
          <h2 className={styles.task__title}>{title}</h2>
          <h3 className={styles.task__subtitle}>{email}</h3>
        </div>
        {editable ? (
          <Checkbox onClick={toggleTaskCompleted} checked={isCompleted} />
        ) : completed ? (
          <CheckCircle color="#14f541" className={styles.task__status} />
        ) : (
          <XCircle color="#757575" className={styles.task__status} />
        )}
      </div>
      <div className={styles.task__actions}>
        {editable ? (
          <textarea
            value={content}
            onChange={handleEditDescription}
            className={styles.task__editableDescription}
          />
        ) : (
          <div className={styles.task__description}>
            <p className={styles.task__descriptionText}>{description}</p>
          </div>
        )}
        <EditTaskButton
          taskId={id}
          isEditable={editable}
          description={content}
          isCompleted={isCompleted}
        />
      </div>
    </li>
  );
};
