"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Dispatch, SetStateAction, useState } from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { useForm } from "react-hook-form";
import SetNewPasswordModal from "./SetNewPasswordModal";
import { set } from "date-fns";

const VerifyOtpModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [otp, setOtp] = useState("");
  const [showSetNewPasswordModal, setShowSetNewPasswordModal] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    setOpen(false);
    setShowSetNewPasswordModal(true);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle className="text-center text-primary-gray/70 text-2xl">
              Forget Password
            </DialogTitle>
            <DialogDescription className="text-center">
              We sent a reset link to contact@dscode...com enter 5 digit code
              that mentioned in the email
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* OTP Input */}
            <div className="flex flex-col justify-center items-center space-y-5">
              <InputOTP
                maxLength={5}
                className="w-full"
                onChange={(value) => setOtp(value)}
              >
                <InputOTPGroup>
                  {Array.from({ length: 5 }, (_, index) => (
                    <InputOTPSlot
                      key={index}
                      index={index}
                      className=" mx-2 border border-primary-gray/50 bg-primary-light-gray size-12"
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>
            <Button
              disabled={otp.length < 5}
              className="w-full bg-primary-orange mt-3"
            >
              Verify Code
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      <SetNewPasswordModal
        open={showSetNewPasswordModal}
        setOpen={setShowSetNewPasswordModal}
      ></SetNewPasswordModal>
    </>
  );
};

export default VerifyOtpModal;
