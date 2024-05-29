import { z } from 'zod';

export const $AuthFormSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Please enter valid email'),
  password: z.string().min(1, 'Password is required'),
});
