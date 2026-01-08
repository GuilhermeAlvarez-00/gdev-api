import Fastifiy from "fastify";
import { userRoutes } from "./routes";

const fastify = Fastifiy({});

fastify.register(userRoutes, { prefix: "/users" });

try {
  fastify
    .listen({ port: 3000 })
    .then(() => console.log("Running on port: 3000"));
} catch (error) {
  fastify.log.error(error);
  process.exit(1);
}
