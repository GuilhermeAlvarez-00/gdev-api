import { InMemoryUser } from "@modules/users/repositories/implementations/in-memory/InMemoryUser";
import { GetUsersController } from "./get-users.controller";

const inMemoryUser = new InMemoryUser();

const getUsersController = new GetUsersController(inMemoryUser);

export { getUsersController };
