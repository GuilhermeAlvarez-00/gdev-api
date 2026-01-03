import { AppError } from "@abstracts/AppError";

export class DefaultError extends AppError {
  constructor(error: unknown) {
    let message = "Unexpected error";

    if (error instanceof Error) {
      message = error.message;
    }

    super(message);
  }
}
