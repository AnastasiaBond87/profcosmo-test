import { z } from 'zod';

export const $TaskFormSchema = z.object({
  title: z.string().min(3, 'Min length 3').max(25, 'Max length 25'),
  email: z.string().min(1, 'Email is required').email('Please enter valid email'),
  description: z.string(),
});
