import { InMemoryUser } from "@modules/user/repositories/implementations/in-memory/InMemoryUser";
import { CreateUserController } from "./create-user.controller";

const inMemoryUser = new InMemoryUser();

export const createUserController = new CreateUserController(inMemoryUser);
