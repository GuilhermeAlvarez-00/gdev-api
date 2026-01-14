import type { TUserEntity } from "@entities/user/user.entity";
import type { TFindAllUsersParams, TUpdateUserRequest, TUser } from "./types";

export interface IUserRepository {
  save(data: TUserEntity): Promise<TUser>;
  findByEmail(email: string): Promise<TUser | null>;
  findById(userId: string): Promise<TUser | null>;
  findAll(params?: TFindAllUsersParams): Promise<TUser[]>;
  updateById(data: TUpdateUserRequest): Promise<TUser>;
}
