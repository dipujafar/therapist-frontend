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

import { PhoneInput } from "@/components/ui/PhoneInput";
import { Controller, useForm } from "react-hook-form";
import CountryStateCitySelector from "@/components/ui/CountryStateCitySelector";
import { useRouter } from "next/navigation";
import Profile from "@/assets/Images/dummyProfile.png";

const BabySitterProfileContainer = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [imageBlobUrl, setImageBlobUrl] = useState<string | null>(null);
  const router = useRouter();

  // input profile image
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const file = input.files?.[0];

    console.log(input.files);

    if (file) {
      const url = URL.createObjectURL(file);
      setImageBlobUrl(url);
      setFileName(file.name);
    } else {
      setImageBlobUrl(null); // Clear the image URL if no file was selected
      setFileName(null);
    }

    // Reset the input value to allow selecting the same file again
    input.value = "";
  };

  const { register, handleSubmit, control, reset, setValue } = useForm();

  const onSubmit = (data: any) => {
    router.push("/confirm-link-sitter");
  };

  console.log("imageBlobUrl", imageBlobUrl);

  return (
    <div className="max-w-5xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5">
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
                  defaultValue={"nurmohammed@gmail.com"}
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
                  defaultValue="Nur Mohammed"
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
                  defaultValue="Opu"
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
                  defaultValue={"25"}
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
                  src={imageBlobUrl || Profile}
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
                {fileName && imageBlobUrl && (
                  <div
                    className=" cursor-pointer absolute top-2 left-4 bg-primary-blue/70 rounded-md"
                    onClick={() => {
                      setFileName(null);
                      setImageBlobUrl(null);
                    }}
                  >
                    <X color="red" />
                  </div>
                )}
              </div>
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
                  value={"+88018" || field.value}
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
                  country: "Bangladesh",
                  state: "Dhaka Division",
                  city: "",
                  area: "Banasree",
                  house: "4/5",
                  zipCode: "50",
                }}
                register={register}
                setValue={setValue}
              />
            </div>
          </div>
        </div>

        {/* ACTION BUTTON */}
        <div className="flex  justify-center items-center gap-x-5 mt-10">
          <Button
            type="submit"
            className="bg-primary-orange text-primary-white px-10 py-5 text-xl"
          >
            Save Change
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BabySitterProfileContainer;
