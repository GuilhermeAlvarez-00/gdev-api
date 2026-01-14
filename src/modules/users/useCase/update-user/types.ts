import { UserEntitySchema } from "@entities/user/user.entity";
import z from "zod";

export const UpdateUserRequestSchema = z.object({
  id: z.string(),
  data: UserEntitySchema.omit({ password: true }).partial(),
});

export type TUpdateUserRequest = z.infer<typeof UpdateUserRequestSchema>;
