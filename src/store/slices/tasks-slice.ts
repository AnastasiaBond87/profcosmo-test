import { type FilterValue } from '@/features/filter-tasks';
import { type SortValue } from '@/features/sort-tasks';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

export type Task = {
  id: number;
  title: string;
  email: string;
  description: string;
  completed: boolean;
  editable: boolean;
};

const initialTasks: Task[] = [
  {
    id: 1,
    title: 'Task 1',
    email: 'test1@test.com',
    description: 'test test',
    completed: true,
    editable: false,
  },
  {
    id: 2,
    title: 'Task 2',
    email: 'test1@test.com',
    description: 'test test',
    completed: false,
    editable: false,
  },
  {
    id: 3,
    title: 'Task 3',
    email: 'test2@test.com',
    description: 'test test',
    completed: false,
    editable: false,
  },
];

type State = {
  tasks: Task[];
  currentTasks: Task[];
  filter: FilterValue;
  sort: SortValue;
};

const initialState: State = {
  tasks: initialTasks,
  currentTasks: [],
  filter: 'all',
  sort: 'title',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask(state, action: PayloadAction<Omit<Task, 'id' | 'completed' | 'editable'>>) {
      const { email, description, title } = action.payload;
      const lastTaskId = state.tasks[state.tasks.length - 1]?.id;
      const id = lastTaskId ? lastTaskId + 1 : 1;

      const newTask: Task = {
        id,
        email,
        description: description.trim(),
        title: title.trim(),
        completed: false,
        editable: false,
      };

      state.tasks = [...state.tasks, newTask];
    },
    toggleEditTask(state, action: PayloadAction<Pick<Task, 'id'>>) {
      const { id } = action.payload;

      state.tasks = state.tasks.map((task) => ({
        ...task,
        editable: task.id === id ? true : task.editable,
      }));
    },
    editTask(state, action: PayloadAction<Pick<Task, 'id' | 'description' | 'completed'>>) {
      const { id, description, completed } = action.payload;

      state.tasks = state.tasks.map((task) => ({
        ...task,
        description: task.id === id ? description : task.description.trim(),
        editable: task.id === id ? false : task.editable,
        completed: task.id === id ? completed : task.completed,
      }));
    },
    setCurrentTasks(state, action: PayloadAction<Task[]>) {
      state.currentTasks = action.payload;
    },
    setFilter(state, action: PayloadAction<FilterValue>) {
      state.filter = action.payload;
    },
    setSort(state, action: PayloadAction<SortValue>) {
      state.sort = action.payload;
    },
  },
});

export const { createTask, editTask, toggleEditTask, setCurrentTasks, setFilter, setSort } =
  tasksSlice.actions;

export const { reducer: tasksReducer, name: tasksReducerName } = tasksSlice;
