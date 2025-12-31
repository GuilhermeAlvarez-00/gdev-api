export type TErrorCodes = "USER_INVALID" | "EMAIL_ALREADY_IN_USE";

export abstract class AppError extends Error {
  statusCode?: number;

  constructor(message: string, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}
