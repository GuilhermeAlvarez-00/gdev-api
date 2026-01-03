import { AppError } from "@abstracts/AppError";
import type { FastifyReply } from "fastify";
import { ZodError } from "zod";

export const returnControllerError = (reply: FastifyReply, error: unknown) => {
  if (error instanceof AppError) {
    return reply
      .status(error.statusCode!)
      .send({ message: error?.message ?? "" });
  }

  if (error instanceof ZodError) {
    return reply.status(400).send(error.issues);
  }

  return reply.status(400).send(error);
};
