"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-menubar";
import dummyProfile from "@/assets/images/make-connect/dummyProfile.png";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ImageIcon, Info, Plus, X } from "lucide-react";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { memberShipPlans } from "@/lib/memberShipPlan";
import { Checkbox } from "@/components/ui/checkbox";
import CountryStateCitySelector from "@/components/ui/CountryStateCitySelector";
import { Controller, useForm } from "react-hook-form";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { DatePicker } from "@/components/ui/date-picker";

type Client = {
  name: string;
  birthday: Date | null;
  info: string;
};

const MakeConnectionForm = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [childBirthday, setChildBirthday] = useState<Date | undefined>(
    undefined
  );

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
    { name: "", birthday: null, info: "" },
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
              </div>
            </div>
          </div>

          {/* ---- upload image ---- */}
          <div className="pt-6  ">
            <div className="relative">
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
                    value={field.value}
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
                rows={5}
                id="petDetails"
                className="w-full  bg-primary-light-gray "
              />
            </div>
          </div>

          {/* ---- input   terms Agreement ---- */}
          <div className="grid w-full  items-center gap-2">
            <p className="text-primary-black/75">
              By signing up for our auto-renewing monthly membership, which will
              be charged to the card on file every 30 days. Your membership will
              continue until you choose to cancel. You can cancel at any time by
              contacting us. Please confirm by answering "yes" below if you
              agree to the terms of our auto-renewing monthly membership.
            </p>

            <Input
              type="text"
              id="agreement"
              className="w-full py-5 mt-1 bg-primary-light-gray "
            />
          </div>

          {/* ---- input  how was hear about us ---- */}
          <div className="grid w-full  items-center gap-2">
            <p className="text-primary-black/75">How did you hear about us?</p>

            <Textarea
              id="howHearAboutUs"
              className="w-full py-5 mt-1 bg-primary-light-gray "
            />
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

        {/* ---- Password ---- */}
        <div className="space-y-5">
          <h1 className="text-2xl font-semibold text-primary-blue">
            Your Password
          </h1>

          <div className="flex flex-col md:flex-row gap-x-7 gap-y-5">
            {/* `---- input  Password ---- */}
            <div className="grid w-full  items-center gap-1.5">
              <Label className="font-semibold text-lg text-primary-black/80">
                Password
              </Label>
              <Input
                type="password"
                id="password"
                placeholder="enter your password"
                className="w-full py-5 bg-primary-light-gray "
              />
            </div>

            {/* ---- input  Confirm Password ---- */}
            <div className="grid w-full  items-center gap-1.5">
              <Label className="font-semibold text-lg text-primary-black/80">
                Retype password
              </Label>
              <Input
                type="confirmPassword"
                id="emergencyPersonPhoneNumber"
                placeholder="retype password"
                className="w-full py-5 bg-primary-light-gray "
              />
            </div>
          </div>
        </div>

        {/* Which membership plan do you want? */}
        <div className="space-y-5">
          <h1 className="text-2xl font-semibold text-primary-blue">
            Which membership plan do you want?
          </h1>

          <RadioGroup defaultValue="comfortable" className="space-y-2">
            {memberShipPlans?.map((plan, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={plan?.value} id={`${index + 1}`} />
                <Label className="text-xl font-medium text-primary-black/85">
                  {plan?.label} $({plan?.price})
                  <Info size={20} className="inline ml-4 " />
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* ---- Credit Card ---- */}
        <div className="space-y-5">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-primary-blue">
              Credit Card
            </h1>
            <p className="text-primary-black/75 text-sm">
              Stripe will make two micro-deposits (less than $1.00) within the
              next two business days. To verify the bank account, you need to
              provide the two amounts that were deposited. (By Clicking the
              Verify Account button in the Payment Information section (after
              logging in to your account))
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-x-7 gap-y-5">
            {/* `---- input Account Number ---- */}
            <div className="grid w-full  items-center gap-1.5">
              <Label className="font-semibold text-lg text-primary-black/80">
                Account Number
              </Label>
              <Input
                type="text"
                id="accountNumber"
                placeholder="enter account number"
                className="w-full py-5 bg-primary-light-gray "
              />
            </div>

            {/* `---- input  routing number ---- */}
            <div className="grid w-full  items-center gap-1.5">
              <Label className="font-semibold text-lg text-primary-black/80">
                Routing Number
              </Label>
              <Input
                type="text"
                id="routingNumber"
                placeholder="enter routing number"
                className="w-full py-5 bg-primary-light-gray "
              />
            </div>
          </div>

          {/* `---- input  account holder name ---- */}
          <div className="grid w-full  items-center gap-1.5">
            <Label className="font-semibold text-lg text-primary-black/80">
              Account Holder Name
            </Label>
            <Input
              type="text"
              id="accountHolderName"
              placeholder="enter account holder name"
              className="w-full py-5 bg-primary-light-gray "
            />
          </div>
        </div>

        {/* accept terms */}
        <div className="flex space-x-2">
          <Checkbox id="terms" className="text-primary-black/50" />
          <label
            htmlFor="terms"
            className=" font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 max-w-3xl text-primary-black/70"
          >
            By checking the box, you are agreeing to Hue-man Links' terms and
            conditions. To participate, you must adhere to the guidelines, which
            will be sent to you following registration.
          </label>
        </div>

        {/* ---- Submit Button ---- */}

        <div className="flex justify-center gap-x-5 flex-wrap gap-y-2">
          <Button
            variant="outline"
            className="border-primary-orange text-primary-orange px-10 py-6 text-xl"
          >
            Cancel
          </Button>

          <Button className="bg-primary-orange text-primary-white px-10 py-6 text-xl">
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MakeConnectionForm;
