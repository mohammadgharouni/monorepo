import { useState } from "react";
import { LoginForm, LoginTypes } from "./context";
import { Button } from "antd";
import { InputDefault } from "@/components/molecules/input/default";
import { usePostAuthLogin } from "@/core/services/hooks";

const LoginPage = () => {
  const { handleSubmit } = LoginForm.useFormContext();
  const [loading, setLoading] = useState(false);
  const { mutate, isPending } = usePostAuthLogin();

  const handleSignIn = async ({ password, email }: LoginTypes) => {
    setLoading(true);
    mutate({ requestBody: { email, password } });
  };
  return (
    <div className="mx-auto mt-10 max-w-lg rounded border p-5 shadow-lg">
      <h1 className="mb-5 text-2xl font-semibold">Sign In</h1>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>

        <LoginForm.Controller
          name="email"
          rules={{ required: "enter field data" }}
          render={({ field, fieldState }) => (
            <InputDefault
              {...field}
              label={"user name"}
              error={{ message: fieldState.error?.message }}
            />
          )}
        />
        <LoginForm.Controller
          name="password"
          rules={{ required: "enter field data" }}
          render={({ field, fieldState }) => (
            <InputDefault
              {...field}
              label={"password"}
              error={{ message: fieldState.error?.message }}
            />
          )}
        />
      </div>

      <Button
        loading={isPending}
        onClick={handleSubmit(handleSignIn)}
        disabled={loading}
        className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {loading ? "Creating..." : "Sign In"}
      </Button>
    </div>
  );
};

const Parent = () => (
  <LoginForm.Provider>
    <LoginPage />
  </LoginForm.Provider>
);

export default Parent;
