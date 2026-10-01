"use client";

import Container from "@/components/Container";
import { signUpSchema } from "@/schema/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
  };

  return (
    <section className="bg-primary-800 grid-shape min-h-screen py-20 sm:py-24 md:py-28 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div className="text-center lg:text-left">
            <h3 className="text-heading-m font-semibold text-white">
              Sign up and come in
            </h3>

            <p className="text-body-m satoshi-regular mt-4 max-w-xl text-shuttlegray-200">
              The registration process is straightforward, uncomplicated, and
              efficient, allowing users to sign up quickly, easily, and at no
              cost.
            </p>
          </div>

          {/* Right */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-3xl bg-white p-6 sm:p-8 md:p-10"
          >
            <p className="text-label-s satoshi-medium text-shuttlegray-400">
              Create an Account
            </p>

            <h2 className="text-heading-s mt-2 font-semibold text-shuttlegray-950">
              Welcome to ByteSpace
            </h2>

            <div className="mt-8 space-y-5">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="text-label-s satoshi-medium mb-2 block text-shuttlegray-950"
                >
                  Full Name
                </label>

                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  {...register("fullName")}
                  className="h-12 w-full rounded-xl border border-shuttlegray-100 px-4 outline-none transition focus:border-secondary-400"
                />

                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

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
                <label
                  htmlFor="password"
                  className="text-label-s satoshi-medium mb-2 block text-shuttlegray-950"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  placeholder="Create a password"
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
                Create Account
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default SignUpPage;
