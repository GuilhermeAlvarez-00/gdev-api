import { InvalidUserError } from "@errors/invalid-user.error";
import type { IUserRepository } from "@modules/users/repositories/user.repository";
import type { TUpdateUserRequest } from "./types";

export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: TUpdateUserRequest) {
    if (!data.id) throw new InvalidUserError();

    const userUpdated = await this.userRepository.updateById({
      id: data.id,
      data: data.data,
    });

    return userUpdated;
  }
}
