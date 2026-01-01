import type { FastifyRequest, FastifyReply } from "fastify"
import type { IUserRepository } from "@modules/user/repositories/user.repository";
import z, { ZodError } from "zod";
import { CreateUserUseCase } from "./create-user.usecase";
import { AppError } from "@abstracts/AppError";
import { returnControllerError } from "@utils/return-controller-error";

const bodySchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string().min(6, "The password must have at least 6 characteres"),
})

export class CreateUserController {
  constructor(private userRepository: IUserRepository) { }

  async handler(request: FastifyRequest, reply: FastifyReply) {
    try {
      const body = bodySchema.parse(request.body);

      const crateUserUseCase = new CreateUserUseCase(this.userRepository);

      const result = await crateUserUseCase.execute(body);
    }
    catch (error: any) {
      returnControllerError(reply, error);
    }
  }
}
