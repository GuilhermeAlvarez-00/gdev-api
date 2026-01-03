import type { TUserEntity } from "@entities/user/user.entity";
import type { IUserRepository } from "../../user.repository";
import { randomUUID } from "node:crypto";
import type { TUser } from "../../types";
import { DefaultError } from "@errors/default-error";

const users = new Map<string, TUser>();

export class InMemoryUser implements IUserRepository {
  async findById(userId: string) {
    const user = users.get(userId);

    return user ?? null;
  }

  async findByEmail(email: string): Promise<TUser | null> {
    const usersData = Array.from(users.values());
    const user = usersData.find((userItem) => userItem.email === email);

    return user ?? null;
  }

  async save(data: TUserEntity) {
    try {
      const id = randomUUID();
      const user: TUser = {
        id,
        ...data,
      };

      users.set(user.id, user);

      return user;
    } catch (error) {
      throw new DefaultError(error);
    }
  }
}
