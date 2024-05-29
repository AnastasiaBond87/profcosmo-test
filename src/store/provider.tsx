'use client';
import { Provider } from 'react-redux';
import { type PropsWithChildren } from 'react';
import { store } from './store';

type ReduxProviderProps = PropsWithChildren<unknown>;

export const ReduxProvider = ({ children }: ReduxProviderProps) => (
  <Provider store={store}>{children}</Provider>
);
