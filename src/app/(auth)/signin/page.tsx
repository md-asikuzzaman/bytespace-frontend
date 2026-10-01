"use client";

import Container from "@/components/Container";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import Link from "next/link";

import auth from "./../../../../public/images/auth.png";
import { signInSchema } from "@/schema/signinSchema";

type SignInFormData = z.infer<typeof signInSchema>;

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: SignInFormData) => {
    console.log(data);
  };

  return (
    <section className="bg-primary-800 grid-shape min-h-screen pt-20 sm:py-28 md:py-32 lg:pt-48 pb-12 sm:pb-16 md:pb-20 lg:pb-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 md:gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div className="text-center lg:text-left">
            <h3 className="text-heading-xs font-semibold text-shuttlegray-50">
              Sign in with ease
            </h3>

            <p className="text-body-m satoshi-regular mx-auto mt-3 max-w-118.75 text-shuttlegray-50 sm:mt-4 sm:text-body-l lg:mx-0">
              Experience a seamless and efficient sign-in process that grants
              you instant access to a world of knowledge.
            </p>

            <Image
              src={auth}
              alt="Authentication"
              className="pointer-events-none mx-auto mt-8 w-full max-w-105 sm:mt-10 md:mt-12 lg:mx-0 lg:mt-14.5 lg:max-w-none hidden lg:block"
            />
          </div>

          {/* Right */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl bg-white p-5 sm:rounded-3xl sm:p-8 md:p-10 lg:p-15"
          >
            <p className="text-body-m satoshi-regular text-primary-800 sm:text-body-l">
              Sign in
            </p>

            <h2 className="text-heading-s font-semibold text-shuttlegray-950 sm:text-heading-m">
              Welcome back
            </h2>

            <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
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
                  placeholder="designer@example.com"
                  {...register("email")}
                  className="input-field"
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
                  placeholder="********"
                  {...register("password")}
                  className="input-field"
                />

                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  className="hover-animation h-11 rounded-full bg-secondary-400 px-5 font-medium text-gray-950 transition hover:bg-secondary-500 sm:h-12 sm:px-6 cursor-pointer"
                >
                  Sign in
                </button>
              </div>
            </div>

            <p className="mt-12 text-center text-body-s text-shuttlegray-700 satoshi-regular sm:mt-20 sm:text-body-m lg:mt-30">
              New user?{" "}
              <Link href="/signup" className="text-primary-800 hover:underline">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default SignInPage;
