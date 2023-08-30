import { z } from 'zod';

export const loginFormSchema = z.object({
  loginName: z.string().email(),
  password: z.string().nonempty(),
});
