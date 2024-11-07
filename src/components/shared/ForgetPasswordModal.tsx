"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dispatch, SetStateAction, useState } from "react";
import VerifyOtpModal from "./VerifyOtpModal";
import { useForm } from "react-hook-form";

type TData = {
  email: string;
};

const ForgetPasswordModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [showVerifyOtpModal, setShowVerifyOtpModal] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm<TData>();

  const onSubmit = (data: TData) => {
    setOpen(false);
    setShowVerifyOtpModal(true);
  };
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle className="text-center text-primary-gray/70 text-2xl">
              Check your email
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* `---- input E-mail ---- */}
            <div className="grid w-full  items-center gap-2">
              <Label className=" text-lg font-medium text-primary-black/80">
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
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <Button className="w-full bg-primary-orange">Send a code</Button>
          </form>
        </DialogContent>
      </Dialog>
      <VerifyOtpModal
        open={showVerifyOtpModal}
        setOpen={setShowVerifyOtpModal}
      ></VerifyOtpModal>
    </>
  );
};

export default ForgetPasswordModal;
