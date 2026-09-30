"use client";

import Container from "@/components/Container";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
  email: z.email("Please enter a valid email address"),

  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <section className="bg-primary-800 grid-shape min-h-screen py-20 sm:py-24 md:py-28 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div className="text-center lg:text-left">
            <h3 className="text-heading-m font-semibold text-white">
              Welcome back
            </h3>

            <p className="text-body-m satoshi-regular mt-4 max-w-xl text-shuttlegray-200">
              Sign in to continue learning, track your progress, and explore
              everything ByteSpace has to offer.
            </p>
          </div>

          {/* Right */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-3xl bg-white p-6 sm:p-8 md:p-10"
          >
            <p className="text-label-s satoshi-medium text-shuttlegray-400">
              Sign In
            </p>

            <h2 className="text-heading-s mt-2 font-semibold text-shuttlegray-950">
              Welcome to ByteSpace
            </h2>

            <div className="mt-8 space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-label-s satoshi-medium mb-2 block text-shuttlegray-950"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                  className="h-12 w-full rounded-xl border border-shuttlegray-100 px-4 outline-none transition focus:border-secondary-400"
                />

                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-label-s satoshi-medium text-shuttlegray-950"
                  >
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-sm text-shuttlegray-500 transition hover:text-shuttlegray-950"
                  >
                    Forgot password?
                  </Link>
                </div>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  {...register("password")}
                  className="h-12 w-full rounded-xl border border-shuttlegray-100 px-4 outline-none transition focus:border-secondary-400"
                />

                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="hover-animation h-12 w-full rounded-full bg-secondary-400 font-medium text-gray-950 transition hover:bg-secondary-500"
              >
                Sign In
              </button>

              <p className="text-center text-sm text-shuttlegray-500">
                Don&apos;t have an account?{" "}
                <Link
                  href="/sign-up"
                  className="font-medium text-shuttlegray-950 hover:underline"
                >
                  Create one
                </Link>
              </p>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default SignInPage;
