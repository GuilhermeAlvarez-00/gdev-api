import { InvalidUserError } from "@errors/invalid-user.error";
import z from "zod";

export const UserEntitySchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

export type TUserEntity = z.infer<typeof UserEntitySchema>;

export class User {
  name: string;
  email: string;
  password: string;

  private constructor({ name, email, password }: TUserEntity) {
    if (!name || !email || !password) {
      throw new InvalidUserError();
    }

    this.name = name;
    this.email = email;
    this.password = password;
  }

  static create(props: TUserEntity) {
    return new User(props);
  }
}
