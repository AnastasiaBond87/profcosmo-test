import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tasksReducer, tasksReducerName } from './slices';

const reducer = combineReducers({
  [tasksReducerName]: tasksReducer,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
