"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SubmitHandler, useForm } from "react-hook-form";

// Define the type for form inputs
type FormData = {
  name: string;
  subject: string;
  email: string;
  message?: string; // Optional field
};

const ConnectForm = () => {
  // Initialize the form with useForm hook and type for form data
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // Define onSubmit handler with proper type
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form className="space-y-16" onSubmit={handleSubmit(onSubmit)}>
        {/* input Full Name */}
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name" className="text-xl">
            Full Name
          </Label>
          <Input
            type="text"
            id="name"
            className="shadow-none border-r-0 border-t-0 border-l-0 border-b-4 border-primary-black md:w-[300px]"
            {...register("name", { required: "Full Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* input Subject */}
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="subject" className="text-xl">
            Subject
          </Label>
          <Input
            type="text"
            id="subject"
            className="shadow-none border-r-0 border-t-0 border-l-0 border-b-4 border-primary-black md:w-[300px]"
            {...register("subject", { required: "Subject is required" })}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject.message}</p>
          )}
        </div>

        {/* input E-mail */}
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email" className="text-xl">
            E-mail
          </Label>
          <Input
            type="email"
            id="email"
            className="shadow-none border-r-0 border-t-0 border-l-0 border-b-4 border-primary-black md:w-[300px]"
            {...register("email", {
              required: "E-mail is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* input Message */}
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="message" className="text-xl">
            Message
          </Label>
          <Textarea
            id="message"
            className="shadow-none border-r-0 border-t-0 border-l-0 border-b-4 border-primary-black md:w-[300px]"
            {...register("message")}
          />
        </div>

        {/* submit button */}
        <Button
          type="submit"
          className="bg-primary-orange w-full rounded-full font-semibold text-xl py-6"
        >
          Contact Us
        </Button>
      </form>
    </div>
  );
};

export default ConnectForm;
