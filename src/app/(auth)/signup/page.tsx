"use client";

import Container from "@/components/Container";
import { signUpSchema } from "@/schema/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import Link from "next/link";

import auth from "./../../../../public/images/auth.png";
import FacebookIcon from "@/components/icons/FacebookIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";

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
    <section className="bg-primary-800 grid-shape min-h-screen pt-20 sm:py-28 md:py-32 lg:pt-48 pb-12 sm:pb-16 md:pb-20 lg:pb-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 md:gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div className="text-center lg:text-left">
            <h3 className="text-heading-xs font-semibold text-shuttlegray-50">
              Sign up and come in
            </h3>

            <p className="text-body-m satoshi-regular mx-auto mt-3 max-w-118.75 text-shuttlegray-50 sm:mt-4 sm:text-body-l lg:mx-0">
              The registration process is straightforward, uncomplicated, and
              efficient, allowing users to sign up quickly, easily, and at no
              cost.
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
              Create an Account
            </p>

            <h2 className="text-heading-s font-semibold text-shuttlegray-950 sm:text-heading-m">
              Welcome to ByteSpace
            </h2>

            <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
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
                  placeholder="Jamie Davis"
                  {...register("fullName")}
                  className="input-field"
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
                  Continue
                </button>
              </div>
            </div>

            <div className="space-y-6 py-8 sm:space-y-7 sm:py-10 md:space-y-10 md:py-14 lg:py-18">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="h-px flex-1 bg-shuttlegray-200" />

                <span className="text-body-m text-shuttlegray-400 satoshi-regular sm:text-body-l">
                  or
                </span>

                <div className="h-px flex-1 bg-shuttlegray-200" />
              </div>

              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="#"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-shuttlegray-200 transition hover:bg-shuttlegray-50 sm:h-auto sm:w-auto sm:p-4 sm:rounded-3xl"
                >
                  <FacebookIcon />
                </Link>

                <Link
                  href="#"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-shuttlegray-200 transition hover:bg-shuttlegray-50 sm:h-auto sm:w-auto sm:p-4 sm:rounded-3xl"
                >
                  <GoogleIcon />
                </Link>
              </div>
            </div>

            <p className="text-center text-body-s text-shuttlegray-700 satoshi-regular  sm:text-body-m">
              Already have an account?{" "}
              <Link href="/signin" className="text-primary-800 hover:underline">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default SignUpPage;
