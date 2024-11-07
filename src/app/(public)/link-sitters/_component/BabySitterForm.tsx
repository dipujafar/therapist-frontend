"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImageIcon, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import dummyProfile from "@/assets/images/make-connect/dummyProfile.png";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { Controller, useForm } from "react-hook-form";
import CountryStateCitySelector from "@/components/ui/CountryStateCitySelector";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import AvailabilitySelector from "@/components/ui/availability-selector";

const BabySitterForm = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const router = useRouter();

  // input profile image
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const file = input.files?.[0];

    console.log(input.files);

    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      setFileName(file.name);
    } else {
      setImageUrl(null); // Clear the image URL if no file was selected
      setFileName(null);
    }

    // Reset the input value to allow selecting the same file again
    input.value = "";
  };

  const { register, handleSubmit, control, reset, setValue } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    router.push("/confirm-link-sitter");
  };

  return (
    <div className="max-w-5xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5">
          <div className="space-y-3  ">
            <Label className="text-xl font-semibold text-primary-blue ">
              Select Availability
            </Label>
            <AvailabilitySelector
              control={control}
              name="availability"
              defaultValue={{ day: "Monday", timeSlots: [] }}
            />
          </div>
          <h1 className="text-xl font-semibold text-primary-blue ">
            Personal Information
          </h1>

          <div className="flex gap-x-10 gap-y-5 flex-col-reverse md:flex-row ">
            {/* basic information */}
            <div className="space-y-5 flex-1">
              {/* `---- input  email ---- */}
              <div className="grid w-full  items-center gap-1.5">
                <Label className="font-semibold text-lg text-primary-black/80">
                  E-mail
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="example@ex.com"
                  className="w-full py-5 bg-primary-light-gray"
                />
              </div>

              {/* `---- input  First Name ---- */}
              <div className="grid w-full  items-center gap-1.5">
                <Label className="font-semibold text-lg text-primary-black/80">
                  First Name
                </Label>
                <Input
                  type="text"
                  id="firstName"
                  placeholder="enter your first name"
                  className="w-full py-5 bg-primary-light-gray "
                />
              </div>

              {/* `---- input Last Name ---- */}
              <div className="grid w-full  items-center gap-1.5">
                <Label className="font-semibold text-lg text-primary-black/80">
                  Last Name
                </Label>
                <Input
                  type="text"
                  id="lastName"
                  placeholder="enter your last name"
                  className="w-full py-5 bg-primary-light-gray "
                />
              </div>

              {/* `---- input gender ---- */}
              <div className="grid w-full  items-center gap-1.5">
                <Label className="font-semibold text-lg text-primary-black/80">
                  Gender
                </Label>
                <Select defaultValue="male">
                  <SelectTrigger className="w-full py-5 bg-primary-light-gray">
                    <SelectValue placeholder="Male" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">FeMale</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* `---- input Age ---- */}
              <div className="grid w-full  items-center gap-1.5">
                <Label className="font-semibold text-lg text-primary-black/80">
                  Age
                </Label>
                <Input
                  type="number"
                  id="age"
                  placeholder="enter your age"
                  className="w-full py-5 bg-primary-light-gray "
                />
              </div>
            </div>

            {/* ---- upload image ---- */}
            <div className="pt-6  flex items-center  flex-col">
              <div className="relative ">
                <Image
                  src={imageUrl ? imageUrl : dummyProfile}
                  alt="dummyProfile"
                  width={900}
                  height={700}
                  className="size-40 rounded-full border-2 border-primary-orange"
                ></Image>
                <div className="absolute bottom-0 right-2 z-[9999]     flex flex-col items-center gap-4 w-fit">
                  <Button
                    variant="outline"
                    type="button"
                    className="w-fit h-fit flex flex-col items-center justify-center text-gray-600 hover:text-gray-800 border-none shadow-none bg-transparent p-0 "
                  >
                    <input
                      type="file"
                      id="fileInput"
                      className="hidden"
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                    <label
                      htmlFor="fileInput"
                      className="cursor-pointer flex flex-col items-center"
                    >
                      <ImageIcon
                        color="#F26D6D"
                        size={32}
                        className=" border-none"
                      />
                    </label>
                  </Button>
                </div>
                {fileName && imageUrl && (
                  <div
                    className=" cursor-pointer absolute top-2 left-4 bg-primary-blue/70 rounded-md"
                    onClick={() => {
                      setFileName(null);
                      setImageUrl(null);
                    }}
                  >
                    <X color="red" />
                  </div>
                )}
              </div>
              <h4 className="mt-3 font-medium">Upload Profile Picture</h4>
            </div>
          </div>

          {/* user phone number */}
          <div className="mb-2 space-y-1">
            <Label className="font-semibold text-lg text-primary-black/80">
              Mobile Number
            </Label>
            <Controller
              // @ts-ignore
              name="phoneNumber"
              // rules={{ required: "Phone number is required" }}
              control={control}
              render={({ field }) => (
                <PhoneInput
                  // @ts-ignore
                  value={field.value}
                  onChange={field.onChange}
                  international
                  defaultCountry="US"
                />
              )}
            />
          </div>

          {/* ---- Home Address ---- */}
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-primary-blue">
              Home Address
            </h3>

            {/* ---- input   Address ---- */}
            <div className="grid w-full  items-center gap-1.5">
              <Label className="font-semibold text-lg text-primary-black/80">
                Address
              </Label>
              {/*---- input   country ---- */}
              <CountryStateCitySelector
                control={control}
                userAddress={{
                  country: "",
                  state: "",
                  city: "",
                  area: "",
                  house: "",
                }}
                register={register}
                setValue={setValue}
              />
            </div>

            <div className="grid w-full  items-center gap-1.5">
              <Label className="font-semibold text-lg text-primary-black/80">
                How did you hear about us?*
              </Label>
              <Textarea
                id="hearAboutUs"
                placeholder="Type here"
                rows={3}
                className="w-full  bg-primary-light-gray "
              />
            </div>

            <div></div>
          </div>
        </div>

        {/* ACTION BUTTON */}
        <div className="flex  justify-center items-center gap-x-5 mt-10">
          <Button
            type="button"
            variant="outline"
            className="border-primary-orange text-primary-orange px-10 py-5 text-xl"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-primary-orange text-primary-white px-10 py-5 text-xl"
          >
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BabySitterForm;
