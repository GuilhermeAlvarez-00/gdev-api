import { createUserController } from "@modules/users/useCase/create-user";
import { getUsersController } from "@modules/users/useCase/get-users";
import { updateUserController } from "@modules/users/useCase/update-user";
import { type FastifyInstance } from "fastify";

export const userRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/", getUsersController.handler.bind(getUsersController));

  fastify.post("/", createUserController.handler.bind(createUserController));

  fastify.patch("/", updateUserController.handle.bind(updateUserController));
};
