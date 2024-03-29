import { z } from 'zod';

export const LoginFormSchema = z.object({
  loginName: z.string().trim().min(1),
  password: z.string().trim().min(1),
});
