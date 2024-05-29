import { ROLE } from '@/shared/constants';
import { type User } from './types';

const USERS: User[] = [
  {
    email: 'user@user.com',
    password: '12345',
    role: ROLE.USER,
  },
  {
    email: 'admin@admin.com',
    password: '67890',
    role: ROLE.ADMIN,
  },
];

export const login = ({ email, password }: Omit<User, 'role'>): Promise<User> => {
  return new Promise((resolve, reject) => {
    const user = USERS.find((user) => user.email === email);
    const isPasswordsMatch = user?.password === password;

    if (!user) {
      return reject(new Error(`User with email ${email} not found!`));
    }

    if (!isPasswordsMatch) {
      return reject(new Error('Invalid password!'));
    }

    resolve(user);
  });
};
