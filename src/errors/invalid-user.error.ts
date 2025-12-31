import { AppError, type TErrorCodes } from "../abstracts/AppError";

export class InvalidUserError extends AppError {
  code: TErrorCodes = "USER_INVALID";

  constructor(message = "Invalid user data") {
    super(message, 400);
  }
}
