import { AppError, type TErrorCodes } from "../abstracts/AppError";

export class EmailAlreadyInUseError extends AppError {
  code: TErrorCodes = "EMAIL_ALREADY_IN_USE";

  constructor(email?: string) {
    email = email ? ` ${email}` : "";
    super(`The email${email} is already in use`, 400);
  }
}
