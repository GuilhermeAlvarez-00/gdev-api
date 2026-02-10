import { InMemoryUser } from "@modules/users/repositories/implementations/in-memory/InMemoryUser";
import { UpdateUserController } from "./update-user.controller";

const inMemoryUser = new InMemoryUser();

const updateUserController = new UpdateUserController(inMemoryUser);

export { updateUserController };
