export type UserInfo = {
  login?: string;
  fullname?: string;
};

export type Role = {
  id: number;
  name?: string;
};

export type User = UserInfo & {
  User?: UserInfo;
  Role?: Role;
  userId?: number;
  roleId?: number;
};

export type RegisterUserData = UserInfo & {
  password?: string;
};

export type LoginUserData = {
  fullname?: string;
  login?: string;
  password?: string;
};

export default User;
