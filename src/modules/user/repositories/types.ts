import type { TUserEntity } from "@entities/user/user.entity";

export type TUser = TUserEntity & {
  id: string;
}
