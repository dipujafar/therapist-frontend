"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dispatch, SetStateAction, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import ForgetPasswordModal from "./ForgetPasswordModal";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LoginModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [opeForgetPasswordModal, setOpenForgetPasswordModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const onSubmit = (data: any) => {
    // Handle form submission (e.g., send data to API)
    if (data?.email === "user@gmail.com") {
      localStorage.setItem("role", "familyUser");
      router.push("/all-babysitters");
      return;
    }
    if (data?.email === "babySitter@gmail.com") {
      localStorage.setItem("role", "babySitter");
      router.push("/all-babysitters");
      return;
    }
    toast.error("You are not valid user");
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center text-primary-gray/70 text-2xl">
              Login to Account
            </DialogTitle>
            <DialogDescription className="text-center">
              Please enter your email and password to continue
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-5">
              {/* `---- input E-mail ---- */}
              <div className="grid w-full items-center gap-2">
                <Label className="text-lg font-medium text-primary-black/80">
                  Email address:
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="example@ex.com"
                  className="w-full py-5 bg-primary-light-gray"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">
                    {errors.email.message as string}
                  </p>
                )}
              </div>

              {/* `---- input Password ---- */}
              <div>
                <div className="relative">
                  <div className="grid w-full items-center gap-2">
                    <Label className="text-lg font-medium text-primary-black/80">
                      Password:
                    </Label>
                    <Input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="********"
                      className="w-full py-5 bg-primary-light-gray"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                  </div>
                  <div
                    className="absolute right-3 top-1/2 translate-y-1   cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <Eye color="#60778C" />
                    ) : (
                      <EyeOff color="#60778C" />
                    )}
                  </div>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message as string}
                  </p>
                )}
              </div>

              {/* Remember me and Forgot Password */}
              <div className="flex flex-wrap items-center justify-between">
                <div>
                  <Checkbox id="remember" className="text-primary-black/50" />
                  <label
                    htmlFor="remember"
                    className="ml-2 text-primary-black/70"
                  >
                    Remember Password
                  </label>
                </div>
                <p
                  onClick={() => {
                    setOpen(false);
                    setOpenForgetPasswordModal(true);
                  }}
                  className="text-primary-black/70 cursor-pointer"
                >
                  Forget Password?
                </p>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-primary-orange">
                Sign In
              </Button>
            </div>
          </form>

          {/* Sign Up Links */}
          <p className="text-center mt-4">
            Don't have an account? please{" "}
            <Link
              href="/make-connection"
              className="text-blue-900 cursor-pointer"
            >
              Make Connection
            </Link>{" "}
            or{" "}
            <Link href="/link-sitters" className="text-blue-900 cursor-pointer">
              Become a link sitter
            </Link>
          </p>
        </DialogContent>
      </Dialog>

      {/* Forget Password Modal */}
      <ForgetPasswordModal
        open={opeForgetPasswordModal}
        setOpen={setOpenForgetPasswordModal}
      />
    </>
  );
};

export default LoginModal;
