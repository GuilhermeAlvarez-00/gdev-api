type TUserEntity = {
  name: string;
  email: string;
  password: string;
}

export class User {
  private readonly _name: string;
  private readonly _email: string;
  private readonly _password: string;

  private constructor({ name, email, password }: TUserEntity) {
    if (!name || !email || !password) {
      throw new Error("Missing required fields name, email and password");
    }

    this._name = name;
    this._email = email;
    this._password = password;
  }

  static create(props: TUserEntity) {
    return new User(props);
  }
}

// Missing required fields name, email and password
