import { describe, expect, test, beforeAll } from "vitest";
import { InMemoryUser } from "@modules/users/repositories/implementations/in-memory/InMemoryUser";
import { UpdateUserUseCase } from "../update-user.usecase";
import { InvalidUserError } from "@errors/invalid-user.error";
import { CreateUserUseCase } from "../../create-user/create-user.usecase";
import { GetUsersUseCase } from "../../get-users/get-users.usecase";
import type { TUpdateUserRequest } from "../types";

const inMemoryUser = new InMemoryUser();

describe("Update User UseCase", () => {
  beforeAll(async () => {
    const createUserUseCase = new CreateUserUseCase(inMemoryUser);

    await Promise.all([
      createUserUseCase.execute({
        name: "Jhon Doe",
        email: "jhondoe@gmail.com",
        password: "jhon123",
      }),
    ]);
  });
  test("should not update a user wihout id", async () => {
    const updateUserUseCase = new UpdateUserUseCase(inMemoryUser);

    //@ts-expect-error undefined user id
    const userUpdated: TUpdateUserRequest = {
      data: {
        name: "User",
      },
    };

    expect(updateUserUseCase.execute(userUpdated)).rejects.throw(
      InvalidUserError
    );
  });

  test("should update an user with provided data", async () => {
    const updateUserUseCase = new UpdateUserUseCase(inMemoryUser);
    const getUsersUseCase = new GetUsersUseCase(inMemoryUser);

    let user = await getUsersUseCase.execute({ email: "jhondoe@gmail.com" });

    const userUpdated: TUpdateUserRequest = {
      id: user?.[0]?.id ?? "",
      data: {
        name: "Jhon Doe Updated",
      },
    };

    expect(updateUserUseCase.execute(userUpdated)).resolves.toEqual({
      ...user[0],
      name: "Jhon Doe Updated",
    });
  });
});
