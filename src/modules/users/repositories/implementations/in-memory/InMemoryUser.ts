import type { TUserEntity } from "@entities/user/user.entity";
import type { IUserRepository } from "../../user.repository";
import { randomUUID } from "node:crypto";
import type { TFindAllUsersParams, TUser } from "../../types";
import { DefaultError } from "@errors/default-error";

const users = new Map<string, TUser>();

export class InMemoryUser implements IUserRepository {
  async findAll(params: TFindAllUsersParams) {
    let usersData = Array.from(users.values());

    if (params) {
      for (let [key, value] of Object.entries(params)) {
        if (!value || !key) continue;
        value = value.toLocaleLowerCase();

        usersData = usersData.filter((user) => {
          if (key === "email") return user[key] === value;

          return user[key as keyof typeof user]
            .toLocaleLowerCase()
            .includes(value ?? "");
        });
      }
    }

    return usersData;
  }

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
