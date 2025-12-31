import { createUserController } from "@modules/user/useCase/create-user";
import { type FastifyInstance } from "fastify"

export const userRoutes = async (fastify: FastifyInstance, options: any) => {
  fastify.post("/user/create", createUserController.handler.bind(createUserController));
  fastify.get("/user", (request, reply) => {
    reply.send("Hello world 3");
  });
}

