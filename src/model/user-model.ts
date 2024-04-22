export type CreateUserResponse = {
  username: string;
  name: string;
  token?: string;
};

export type CreateUserRequest = {
  username: string;
  email: string;
  name: string;
  password: string;
};
