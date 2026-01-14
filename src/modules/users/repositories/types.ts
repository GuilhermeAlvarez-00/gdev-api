import type { TUserEntity } from "@entities/user/user.entity";

export type TUser = TUserEntity & {
  id: string;
};

export type TFindAllUsersParams = {
  name?: string | undefined;
  email?: string | undefined;
};

export type TUpdateUserRequest = {
  id: string;
  data: Partial<Omit<TUserEntity, "password">>;
};
