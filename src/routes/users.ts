import { createUserController } from "@modules/users/useCase/create-user";
import { getUsersController } from "@modules/users/useCase/get-users";
import { type FastifyInstance } from "fastify";

export const userRoutes = async (fastify: FastifyInstance) => {
  fastify.post("/", createUserController.handler.bind(createUserController));

  fastify.get("/", getUsersController.handler.bind(getUsersController));
};
