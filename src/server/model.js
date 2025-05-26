import { z } from "zod/v4";

export const User = z.object({ 
  name: z.string(),
  mobilePhone: z.coerce.number(),
  email: z.email(),
  password: z.string().min(3),
});

export const AuthModel = z.object({
  email: z.email(),
  password: z.string().min(3),
})