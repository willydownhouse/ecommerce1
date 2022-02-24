export interface IUser {
  id: string;
  email: string;
  password: string;
  full_name: {
    first_name: string;
    last_name: string;
  };
}
