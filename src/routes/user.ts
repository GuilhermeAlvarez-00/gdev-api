import { type FastifyInstance } from "fastify"

export const userRoutes = async (fastify: FastifyInstance, options: any) => {
  fastify.get("/user", (request, reply) => {
    reply.send("Hello world 3");
  });
}

