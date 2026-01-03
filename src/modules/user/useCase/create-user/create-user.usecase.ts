import { User, type TUserEntity } from "@entities/user/user.entity";
import { EmailAlreadyInUseError } from "@errors/email-already-in-use.error";
import type { IUserRepository } from "@modules/user/repositories/user.repository";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: TUserEntity) {
    await this.validateUserByEmail(data.email);

    const userData = User.create(data);

    const user = await this.userRepository.save(userData);

    return user;
  }

  private async validateUserByEmail(email: string) {
    const doesUserExists = await this.userRepository.findByEmail(email);

    if (doesUserExists) {
      throw new EmailAlreadyInUseError(email);
    }
  }
}
