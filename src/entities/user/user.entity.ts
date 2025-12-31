import { InvalidUserError } from "@errors/invalid-user.error";

export type TUserEntity = {
  name: string;
  email: string;
  password: string;
}

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

// Missing required fields name, email and password
