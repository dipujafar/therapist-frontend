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
import { Eye, EyeOff } from "lucide-react";

const SetNewPasswordModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle className="text-center text-primary-gray/70 text-2xl">
              Set a new password
            </DialogTitle>
            <DialogDescription className="text-center max-w-sm mx-auto">
              Create a new password. Ensure it differs from previous ones for
              security
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-5">
            {/* `---- input new password ---- */}
            <div className="relative">
              <div className="grid w-full  items-center gap-2">
                <Label className=" text-lg font-medium text-primary-black/80">
                  New Password:
                </Label>
                <Input
                  type={showPassword ? "text" : "password"}
                  id="new-password"
                  placeholder="********"
                  className="w-full py-5 bg-primary-light-gray "
                />
              </div>
              {/* Eye icon to toggle password visibility */}
              <div
                className="absolute right-3 top-1/2 translate-y-1 transform cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Eye color="#60778C" />
                ) : (
                  <EyeOff color="#60778C" />
                )}
              </div>
            </div>

            {/* `---- input confirm password ---- */}
            <div className="relative">
              <div className="grid w-full  items-center gap-2">
                <Label className=" text-lg font-medium text-primary-black/80">
                  Confirm Password:
                </Label>
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  placeholder="********"
                  className="w-full py-5 bg-primary-light-gray "
                />
              </div>
              {/* Eye icon to toggle password visibility */}
              <div
                className="absolute right-3 top-1/2 translate-y-1 transform cursor-pointer"
                onClick={() => setConfirmShowPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <Eye color="#60778C" />
                ) : (
                  <EyeOff color="#60778C" />
                )}
              </div>
            </div>

            <Button className="w-full bg-primary-orange">
              Update Password
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SetNewPasswordModal;
