import { z } from 'zod';
import { $AuthFormSchema } from './schema';

export type AuthFormFields = z.infer<typeof $AuthFormSchema>;
