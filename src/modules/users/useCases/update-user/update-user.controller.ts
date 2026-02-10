import type { FastifyRequest, FastifyReply } from "fastify";
import type { IUserRepository } from "@modules/users/repositories/user.repository";
import { UpdateUserUseCase } from "./update-user.usecase";
import { returnControllerError } from "@utils/return-controller-error";
import { UpdateUserRequestSchema } from "./types";

export class UpdateUserController {
  constructor(private userRepository: IUserRepository) {}

  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const body = UpdateUserRequestSchema.parse(request.body);

      const updateUserUseCase = new UpdateUserUseCase(this.userRepository);

      const result = await updateUserUseCase.execute(body);

      return reply.status(201).send(result);
    } catch (error) {
      returnControllerError(reply, error);
    }
  }
}
