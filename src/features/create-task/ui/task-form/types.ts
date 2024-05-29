import { z } from 'zod';
import { $TaskFormSchema } from './schema';

export type TaskFormFields = z.infer<typeof $TaskFormSchema>;
