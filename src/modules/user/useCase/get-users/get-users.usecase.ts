import type { TFindAllUsersParams } from "@modules/user/repositories/types";
import type { IUserRepository } from "@modules/user/repositories/user.repository";

export class GetUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(params: TFindAllUsersParams) {
    const getUsers = await this.userRepository.findAll(params);

    return getUsers;
  }
}
