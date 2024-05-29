import { ROLE } from '@/shared/constants';

export type User = {
  email: string;
  password: string;
  role: ROLE;
};
