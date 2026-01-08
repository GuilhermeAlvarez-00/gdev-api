import type { IUserRepository } from "@modules/users/repositories/user.repository";
import { returnControllerError } from "@utils/return-controller-error";
import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { GetUsersUseCase } from "./get-users.usecase";

const queryParamsSchema = z.object({
  name: z.string().optional(),
  email: z.email().optional(),
});

export class GetUsersController {
  constructor(private userRepository: IUserRepository) {}

  async handler(request: FastifyRequest, reply: FastifyReply) {
    try {
      const queryParams = queryParamsSchema.parse(request.query);

      const getUsersUseCase = new GetUsersUseCase(this.userRepository);

      const result = await getUsersUseCase.execute(queryParams);

      return reply.status(200).send(result);
    } catch (error) {
      returnControllerError(reply, error);
    }
  }
}
