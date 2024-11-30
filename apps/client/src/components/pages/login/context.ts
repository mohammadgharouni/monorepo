import { createFormContext } from "react-hook-form-context";

export type LoginTypes = {
  email: string;
  password: string;
};

export const LoginForm = createFormContext<LoginTypes>({
  email: "",
  password: "",
});
