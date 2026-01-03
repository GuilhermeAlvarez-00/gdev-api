import { describe, expect, test } from "vitest";
import { CreateUserUseCase } from "../create-user.usecase";
import { InMemoryUser } from "@modules/user/repositories/implementations/in-memory/InMemoryUser";
import { EmailAlreadyInUseError } from "@errors/email-already-in-use.error";

describe("Create User UseCase", () => {
  test("should not create a user with an email that already exists", async () => {
    const inMemomryUser = new InMemoryUser();
    const createUseCase = new CreateUserUseCase(inMemomryUser);

    const userData = {
      name: "Jhon Doe",
      email: "jhondoe@gmail.com",
      password: "1234567",
    };

    await expect(createUseCase.execute(userData)).rejects.throw(
      EmailAlreadyInUseError
    );
  });
});
