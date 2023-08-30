import { z } from 'zod';

export const loginFormSchema = z.object({
  loginName: z.string(),
  password: z.string(),
});
