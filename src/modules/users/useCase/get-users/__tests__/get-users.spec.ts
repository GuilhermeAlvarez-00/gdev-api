import { InMemoryUser } from "@modules/users/repositories/implementations/in-memory/InMemoryUser";
import { describe, expect, test, beforeAll } from "vitest";
import { GetUsersUseCase } from "../get-users.usecase";
import { CreateUserUseCase } from "../../create-user/create-user.usecase";

const inMemoryUser = new InMemoryUser();

describe("Get users Use Case", () => {
  beforeAll(async () => {
    const createUserUseCase = new CreateUserUseCase(inMemoryUser);

    await Promise.all([
      createUserUseCase.execute({
        name: "Jhon Doe",
        email: "jhondoe@gmail.com",
        password: "jhon123",
      }),
      createUserUseCase.execute({
        name: "Mary Jane",
        email: "maryjane@gmail.com",
        password: "maryjane123",
      }),
      createUserUseCase.execute({
        name: "Mary Poppins",
        email: "marypoppins@gmail.com",
        password: "marypoppins123",
      }),
    ]);
  });

  test("should list all users if are no filters", async () => {
    const getUsersUseCase = new GetUsersUseCase(inMemoryUser);

    const result = await getUsersUseCase.execute({});

    expect(result.map((user) => user.email)).toEqual([
      "jhondoe@gmail.com",
      "maryjane@gmail.com",
      "marypoppins@gmail.com",
    ]);
  });

  test("should list all users filtered by name", async () => {
    const getUsersUseCase = new GetUsersUseCase(inMemoryUser);

    const result = await getUsersUseCase.execute({ name: "mary" });

    expect(result.map((user) => user.email)).toEqual([
      "maryjane@gmail.com",
      "marypoppins@gmail.com",
    ]);
  });

  test("should list an user filtered by exact email", async () => {
    const getUsersUseCase = new GetUsersUseCase(inMemoryUser);

    let result = await getUsersUseCase.execute({ email: "mary" });

    expect(result).toHaveLength(0);

    result = await getUsersUseCase.execute({ email: "maryjane@gmail.com" });

    expect(result.map((user) => user.email)).toEqual(["maryjane@gmail.com"]);
  });

  test("should list an user filtered name and exact email", async () => {
    const getUsersUseCase = new GetUsersUseCase(inMemoryUser);

    const result = await getUsersUseCase.execute({
      name: "mary",
      email: "maryjane@gmail.com",
    });

    expect(result.map((user) => user.email)).toEqual(["maryjane@gmail.com"]);
  });
});
