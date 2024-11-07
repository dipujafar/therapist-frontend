"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-menubar";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ImageIcon, Plus, X } from "lucide-react";
import { useState } from "react";
import CountryStateCitySelector from "@/components/ui/CountryStateCitySelector";
import { Controller, useForm } from "react-hook-form";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { DatePicker } from "@/components/ui/date-picker";
import Profile from "@/assets/Images/dummyProfile.png";

type Client = {
  name: string;
  birthday: Date | null;
  info: string;
};

const FamilyUserProfileContainer = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const { register, handleSubmit, control, reset, setValue } = useForm();

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

  // dynamic add input field for clients
  const [clients, setClients] = useState<Client[]>([
    { name: "Nur", birthday: null, info: "He is a Decent boy" },
    { name: "Uzzal", birthday: null, info: "He is nice guy" },
  ]);

  const addClient = () => {
    setClients([...clients, { name: "", birthday: null, info: "" }]);
  };

  const removeClient = (index: number) => {
    setClients(clients.filter((_, i) => i !== index));
  };

  const updateClient = (index: number, field: keyof Client, value: any) => {
    const updatedClients = [...clients];
    updatedClients[index][field] = value;
    setClients(updatedClients);
    console.log(updatedClients);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <form className="space-y-16">
        {/*------------------- personal info ------------------ */}
        <div className="flex flex-col-reverse justify-center items-center md:items-start md:flex-row gap-x-8 gap-y-6">
          <div className="md:flex-1 w-full space-y-8">
            {/* `---- input E-mail ---- */}
            <div className="grid w-full  items-center gap-1.5">
              <Label className="font-semibold text-lg text-primary-black/80">
                E-mail
              </Label>
              <Input
                defaultValue={"nurmohammed@gmail.com"}
                type="email"
                id="email"
                placeholder="example@ex.com"
                className="w-full py-5 bg-primary-light-gray "
              />
            </div>

            {/* ---- Primary Parent & Secondary Caregiver ---- */}

            <div className="flex flex-col md:flex-row gap-x-7 gap-y-5">
              {/*  --------- Primary Caregiver --------*/}
              <div className="space-y-3 flex-1">
                <h1 className="text-xl font-semibold text-primary-blue ">
                  Primary Caregiver
                </h1>
                {/* `---- input  First Name ---- */}
                <div className="grid w-full  items-center gap-1.5">
                  <Label className="font-semibold text-lg text-primary-black/80">
                    First Name
                  </Label>
                  <Input
                    defaultValue={"Nur"}
                    type="text"
                    id="primaryParentFirstName"
                    placeholder="enter caregiver 1 first name"
                    className="w-full py-5 bg-primary-light-gray "
                  />
                </div>

                {/* `---- input Last Name ---- */}
                <div className="grid w-full  items-center gap-1.5">
                  <Label className="font-semibold text-lg text-primary-black/80">
                    Last Name
                  </Label>
                  <Input
                    defaultValue={"Mohammed"}
                    type="text"
                    id="primaryParentLastName"
                    placeholder="enter caregiver 1 last name"
                    className="w-full py-5 bg-primary-light-gray "
                  />
                </div>

                {/* user phone number */}
                <div className="mb-2 space-y-1">
                  <Label className="font-semibold text-lg text-primary-black/80">
                    Mobile Number
                  </Label>
                  <Controller
                    // @ts-ignore
                    name="primaryParentPhone"
                    // rules={{ required: "Phone number is required" }}
                    control={control}
                    render={({ field }) => (
                      <PhoneInput
                        // @ts-ignore
                        value={"+88045" || field.value}
                        onChange={field.onChange}
                        international
                        defaultCountry="US"
                      />
                    )}
                  />
                </div>
              </div>

              {/*  --------- Secondary Caregiver --------*/}
              <div className="space-y-3 flex-1">
                <h1 className="text-xl font-semibold text-primary-blue ">
                  Secondary Caregiver
                </h1>
                {/* `---- input  First Name ---- */}
                <div className="grid w-full  items-center gap-1.5">
                  <Label className="font-semibold text-lg text-primary-black/80">
                    First Name
                  </Label>
                  <Input
                    defaultValue={"Samim"}
                    type="text"
                    id="secondaryParentFirstName"
                    placeholder="enter caregiver 2 first name"
                    className="w-full py-5 bg-primary-light-gray "
                  />
                </div>

                {/* `---- input Last Name ---- */}
                <div className="grid w-full  items-center gap-1.5">
                  <Label className="font-semibold text-lg text-primary-black/80">
                    Last Name
                  </Label>
                  <Input
                    defaultValue={"Ahmed"}
                    type="text"
                    id="secondaryParentLastName"
                    placeholder="enter caregiver 2 last name"
                    className="w-full py-5 bg-primary-light-gray "
                  />
                </div>

                {/* user phone number */}
                <div className="mb-2 space-y-1">
                  <Label className="font-semibold text-lg text-primary-black/80">
                    Mobile Number
                  </Label>
                  <Controller
                    // @ts-ignore
                    name="secondaryParentPhoneNumber"
                    // rules={{ required: "Phone number is required" }}
                    control={control}
                    render={({ field }) => (
                      <PhoneInput
                        // @ts-ignore
                        value={"+88045" || field.value}
                        onChange={field.onChange}
                        international
                        defaultCountry="US"
                      />
                    )}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ---- upload image ---- */}
          <div className="pt-6  ">
            <div className="relative">
              <Image
                src={imageUrl ? imageUrl : Profile}
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

        {/* ---- Emergency Contact (non-parent) ---- */}
        <div className="space-y-5">
          <h1 className="text-2xl font-semibold text-primary-blue">
            Emergency Contact (non-parent)
          </h1>

          <div className="flex flex-col md:flex-row gap-x-7 gap-y-5">
            {/* `---- input  person's name ---- */}
            <div className="grid w-full  items-center gap-1.5">
              <Label className="font-semibold text-lg text-primary-black/80">
                Person’s name
              </Label>
              <Input
                defaultValue={"Uzzal"}
                type="text"
                id="emergencyPersonName"
                placeholder="enter person’s name"
                className="w-full py-5 bg-primary-light-gray "
              />
            </div>

            {/* `---- input  Phone Number ---- */}
            <div className="grid w-full  items-center gap-1.5">
              <Label className="font-semibold text-lg text-primary-black/80">
                Person’s Phone Number
              </Label>
              {/* user phone number */}

              <Controller
                // @ts-ignore
                name="phoneNumber"
                // rules={{ required: "Phone number is required" }}
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    // @ts-ignore
                    value={"+88045" || field.value}
                    onChange={field.onChange}
                    international
                    defaultCountry="US"
                  />
                )}
              />
            </div>
          </div>
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

          <div></div>
        </div>

        {/* ---- Additional Information ---- */}
        <div className="space-y-5">
          <h1 className="text-2xl font-semibold text-primary-blue">
            Additional Information
          </h1>

          {/* ---- input   Household Details & Pet Details ---- */}
          <div className="flex flex-col md:flex-row gap-x-7 gap-y-5">
            {/* ---- input   Household Details ---- */}
            <div className="grid w-full  items-center gap-1.5">
              <Label className="font-semibold text-lg text-primary-black/80">
                Household Details
              </Label>
              <Textarea
                defaultValue={
                  "Data will come from the user when  connect with backend"
                }
                rows={5}
                id="householdDetails"
                className="w-full  bg-primary-light-gray "
              />
            </div>

            {/* ---- input   Pet Details ---- */}
            <div className="grid w-full  items-center gap-1.5">
              <Label className="font-semibold text-lg text-primary-black/80">
                Pet Details
              </Label>
              <Textarea
                defaultValue={
                  "Data will come from the user when  connect with backend"
                }
                rows={5}
                id="petDetails"
                className="w-full  bg-primary-light-gray "
              />
            </div>
          </div>
        </div>

        {/* Client Information */}
        <div className="space-y-5">
          {/* Client Information Header */}
          <div className="flex justify-between flex-wrap gap-2">
            <h1 className="text-2xl font-semibold text-primary-blue">
              Client's Profile
            </h1>
            <Button
              type="button"
              className="bg-primary-orange group"
              onClick={addClient}
            >
              <Plus size={20} className="mr-1 group-hover:animate-bounce" />
              Add another client
            </Button>
          </div>

          {clients.map((client, index) => (
            <div key={index} className="relative space-y-5 ">
              {/* Cancel Icon (shows only if more than one client) */}
              {clients.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeClient(index)}
                  className="absolute top-2 right-2 text-primary-red hover:text-red-600"
                  aria-label="Remove client"
                >
                  <X size={20} color="red" />
                </button>
              )}

              {/* Client Name and Birthday */}
              <div className="flex flex-col md:flex-row gap-x-7 gap-y-5">
                {/* Input Client’s Name */}
                <div className="grid w-full items-center gap-1.5">
                  <Label className="font-semibold text-lg text-primary-black/80">
                    {index > 0 && index + 1 + "."} Client's Name
                  </Label>
                  <Input
                    type="text"
                    placeholder="Client’s name"
                    value={client.name}
                    onChange={(e) =>
                      updateClient(index, "name", e.target.value)
                    }
                    className="w-full py-5 bg-primary-light-gray"
                  />
                </div>

                {/* Input Client's Birthday */}
                <div className="grid w-full items-center gap-1.5">
                  <Label className="font-semibold text-lg text-primary-black/80">
                    Client's Birthday
                  </Label>
                  <DatePicker
                    name="dob"
                    control={control}
                    // label="Date of Birth"
                    onChange={(date) => updateClient(index, "birthday", date)}
                  />
                </div>
              </div>

              {/* Input Client’s Info */}
              <div className="grid w-full items-center gap-1.5">
                <Label className="font-semibold text-lg text-primary-black/80">
                  Client's Information
                </Label>
                <Textarea
                  rows={3}
                  placeholder="Interests, Allergies or Medical Conditions"
                  value={client.info}
                  onChange={(e) => updateClient(index, "info", e.target.value)}
                  className="w-full bg-primary-light-gray"
                />
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default FamilyUserProfileContainer;
