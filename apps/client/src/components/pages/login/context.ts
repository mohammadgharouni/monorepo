import { createFormContext } from "react-hook-form-context";

export type LoginTypes = {
  username: string;
  password: string;
};

export const LoginForm = createFormContext<LoginTypes>({
  username: "",
  password: "",
});
