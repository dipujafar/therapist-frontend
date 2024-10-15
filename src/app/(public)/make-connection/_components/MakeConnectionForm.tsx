"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-menubar";
import dummyProfile from "@/assets/images/make-connect/dummyProfile.png";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Ban, CalendarIcon, CircleX, ImageIcon, Info, X } from "lucide-react";

import { useState } from "react";
import { DateTimePicker } from "@/components/ui/datepicker";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { memberShipPlans } from "@/lib/memberShipPlan";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

const MakeConnectionForm = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [childBirthday, setChildBirthday] = useState<Date | undefined>(
    undefined
  );

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
  return (
    <div className="max-w-5xl mx-auto">
      <form className="space-y-16">
        {/*------------------- personal info ------------------ */}
        <div className="flex flex-col-reverse justify-center items-center md:items-start md:flex-row gap-x-8 gap-y-6">
          <div className="md:flex-1 w-full space-y-6">
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

            {/* ---- Primary Parent & Secondary Parent ---- */}

            <div className="flex flex-col md:flex-row gap-x-7 gap-y-5">
              {/*  --------- Primary Parent --------*/}
              <div className="space-y-3 flex-1">
                <h1 className="text-xl font-semibold text-primary-blue ">
                  Primary Parent
                </h1>
                {/* `---- input  First Name ---- */}
                <div className="grid w-full  items-center gap-1.5">
                  <Label className="font-semibold text-lg text-primary-black/80">
                    First Name
                  </Label>
                  <Input
                    type="text"
                    id="primaryParentFirstName"
                    placeholder="enter primary parent first name"
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
                    placeholder="enter primary parent last name"
                    className="w-full py-5 bg-primary-light-gray "
                  />
                </div>

                {/* `---- input Mobile Number ---- */}
                <div className="grid w-full  items-center gap-1.5">
                  <Label className="font-semibold text-lg text-primary-black/80">
                    Mobile Number
                  </Label>
                  <Input
                    type="text"
                    id="primaryParentMobileNumber"
                    placeholder="enter  mobile number"
                    className="w-full py-5 bg-primary-light-gray "
                  />
                </div>
              </div>

              {/*  --------- Secondary Parent --------*/}
              <div className="space-y-3 flex-1">
                <h1 className="text-xl font-semibold text-primary-blue ">
                  Secondary Parent
                </h1>
                {/* `---- input  First Name ---- */}
                <div className="grid w-full  items-center gap-1.5">
                  <Label className="font-semibold text-lg text-primary-black/80">
                    First Name
                  </Label>
                  <Input
                    type="text"
                    id="secondaryParentFirstName"
                    placeholder="enter secondary parent first name"
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
                    placeholder="enter secondary parent last name"
                    className="w-full py-5 bg-primary-light-gray "
                  />
                </div>

                {/* `---- input Mobile Number ---- */}
                <div className="grid w-full  items-center gap-1.5">
                  <Label className="font-semibold text-lg text-primary-black/80">
                    Mobile Number
                  </Label>
                  <Input
                    type="text"
                    id="secondaryParentMobileNumber"
                    placeholder="enter mobile number"
                    className="w-full py-5 bg-primary-light-gray "
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
              <Input
                type="text"
                id="emergencyPersonPhoneNumber"
                placeholder="enter phone number"
                className="w-full py-5 bg-primary-light-gray "
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
            <Input
              type="text"
              id="address"
              placeholder="enter service address"
              className="w-full py-5 bg-primary-light-gray "
            />
          </div>

          {/*---- input   country ---- */}
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

        {/* Child Information */}
        <div className="space-y-5">
          {/* Child Information Header */}
          <div className="flex justify-between flex-wrap gap-2">
            <h1 className="text-2xl font-semibold text-primary-blue">
              Child's Information
            </h1>
            <Button type="button" className="bg-primary-orange ">
              New Child
            </Button>
          </div>

          {/* input child name birthday */}
          <div className="flex flex-col md:flex-row gap-x-7 gap-y-5">
            {/* `---- input  Child’s Name ---- */}
            <div className="grid w-full  items-center gap-1.5">
              <Label className="font-semibold text-lg text-primary-black/80">
                Child’s Name
              </Label>
              <Input
                type="text"
                id="childName"
                placeholder="Child’s name"
                className="w-full py-5 bg-primary-light-gray "
              />
            </div>

            {/* `---- input  birthday ---- */}
            <div className="grid w-full  items-center gap-1.5">
              <Label className="font-semibold text-lg text-primary-black/80">
                Child’s Birthday
              </Label>
              <div className=" space-y-2 w-full">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        " justify-start text-left font-normal w-full bg-primary-light-gray",
                        !childBirthday && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {childBirthday ? (
                        format(childBirthday, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={childBirthday}
                      onSelect={setChildBirthday}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          {/* `---- input  Child’s Info ---- */}
          <div className="grid w-full  items-center gap-1.5">
            <Label className="font-semibold text-lg text-primary-black/80">
              Child’s Info
            </Label>
            <Textarea
              rows={3}
              id="childInfo"
              placeholder="Interests, Allergies or Medical Conditions"
              className="w-full  bg-primary-light-gray "
            />
          </div>
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
