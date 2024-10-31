import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading";
import useLocalStorageState from "../hooks/useLocalStoragesTate";

type FormValues = {
  username: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [token, setToken] = useLocalStorageState("token", "");

  const user = useAuth();
  useEffect(() => {
    if (user?.authenticated) navigate("/", { replace: true });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      username: "admin",
      password: "admin",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    if (data.username === "admin" && data.password === "admin") {
      setLoading(true);
      setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9");
      setTimeout(() => {
        navigate("/");
      }, 2500);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 dark:from-gray-800 dark:to-gray-900">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Username
            </label>
            <input
              {...register("username", { required: "Username is required" })}
              id="username"
              type="text"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:focus:ring-purple-400"
              placeholder="Enter your username"
            />
            {errors.username && (
              <p className="mt-2 text-sm text-red-500">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              id="password"
              type="password"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:focus:ring-purple-400"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="mt-2 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:outline-none dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-400 dark:focus:ring-offset-gray-800"
          >
            {loading ? <Loading width="20" height="20" /> : "Log in"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
