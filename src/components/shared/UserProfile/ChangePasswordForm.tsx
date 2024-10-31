"use client";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type ChangePasswordFormInputs = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ChangePasswordFormInputs>();

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit: SubmitHandler<ChangePasswordFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-medium text-primary-orange ">
        Change Password
      </h1>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Current password */}

          <div>
            <div className="relative flex flex-col space-y-1.5 lg:w-1/2">
              <Label className="text-lg font-medium text-primary-black">
                Current Password
              </Label>
              <Input
                type={showOldPassword ? "text" : "password"}
                {...register("oldPassword", {
                  required: "Current password is required",
                })}
                id="currentPassword"
                placeholder="Current Password"
                className="py-6 border border-black"
              />

              <div
                className="absolute right-3 top-1/2 transform cursor-pointer"
                onClick={() => setShowOldPassword(!showOldPassword)}
              >
                {showOldPassword ? (
                  <Eye color="#555656" size={20} />
                ) : (
                  <EyeOff color="#555656" size={20} />
                )}
              </div>
            </div>
            {errors.oldPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.oldPassword.message}
              </p>
            )}
          </div>
          {/* new and confirm password */}

          {/* new password */}

          <div>
            <div className="relative flex flex-col space-y-1.5 lg:w-1/2 ">
              <Label className="text-lg font-medium text-primary-black">
                New Password
              </Label>
              <Input
                type={showNewPassword ? "text" : "password"}
                {...register("newPassword", {
                  required: "New password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                    message:
                      "Password must contain an uppercase letter and a symbol",
                  },
                })}
                id="newPassword"
                placeholder="**********"
                className="py-6 border border-black"
              />

              <div
                className="absolute right-3 top-1/2  transform cursor-pointer"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? (
                  <Eye color="#555656" size={20} />
                ) : (
                  <EyeOff color="#555656" size={20} />
                )}
              </div>
            </div>
            {errors.newPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.newPassword.message}
              </p>
            )}
          </div>

          {/* confirm password */}

          <div>
            <div className="relative flex flex-col space-y-1.5 lg:w-1/2">
              <Label className="text-lg font-medium text-primary-black">
                Confirm Password
              </Label>
              <Input
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === watch("newPassword") ||
                    "Passwords do not match with New Password",
                })}
                id="confirmPassword"
                placeholder="**********"
                className="py-6 border border-black"
              />

              <div
                className="absolute right-3 top-1/2  transform cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <Eye color="#555656" size={20} />
                ) : (
                  <EyeOff color="#555656" size={20} />
                )}
              </div>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* submit button */}
          <Button
            type="submit"
            className="  rounded bg-primary-orange  w-full lg:w-[50%] hover:bg-primary-gray"
          >
            Save Change
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
