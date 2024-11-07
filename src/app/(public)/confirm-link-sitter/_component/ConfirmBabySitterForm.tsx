"use client";

import { Label } from "@radix-ui/react-menubar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { skills } from "@/utils/sitterSkill";
import { useForm } from "react-hook-form";
import MultipleSelect from "@/components/ui/multiple-select";
import { educationLevels } from "@/utils/educationLavel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash, Trash2, TrashIcon, UploadIcon } from "lucide-react";
import { useState } from "react";

const ConfirmBabySitterForm = () => {
  const { register, handleSubmit, control, reset, setValue } = useForm();
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const handleUploadResume = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResumeFile(event.target.files?.[0] || null);
    event.target.value = "";
  };

  console.log(resumeFile);

  return (
    <div className="max-w-5xl mx-auto">
      <form>
        <div className="space-y-7">
          {/* validation */}
          <div className="grid w-full  items-center gap-1.5">
            <Label className="font-semibold text-lg text-primary-black/80">
              Are you 18 years or older?
            </Label>
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label>Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label>No</Label>
              </div>
            </RadioGroup>
          </div>

          {/* input skill */}
          <div className="grid w-full  items-center gap-1.5">
            <Label className="font-semibold text-lg text-primary-black/80">
              What are your skill sets to make your sitting session memorable
            </Label>
            <MultipleSelect
              name="skills"
              control={control}
              options={skills}
              placeholder="select 3 words"
            />
          </div>

          {/* input language */}
          <div className="grid w-full  items-center gap-1.5">
            <Label className="font-semibold text-lg text-primary-black/80">
              Which language do you speak?
            </Label>
            <Select>
              <SelectTrigger className="w-full py-5 bg-primary-light-gray">
                <SelectValue placeholder="select languages" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* input education level */}
          <div className="grid w-full  items-center gap-1.5">
            <Label className="font-semibold text-lg text-primary-black/80">
              What is your level of education?
            </Label>
            <Select>
              <SelectTrigger className="w-full py-5 bg-primary-light-gray">
                <SelectValue placeholder="select level" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {educationLevels?.map((item, index) => (
                    <SelectItem key={index} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* `---- input  use type ---- */}
          <div className="grid w-full  items-center gap-1.5">
            <Label className="font-semibold text-lg text-primary-black/80">
              Are you a BCBA Candidate? Do you need unrestricted hours?
            </Label>
            <Input type="text" className="w-full py-5 bg-primary-light-gray " />
          </div>

          {/* input occupation */}
          <div className="grid w-full  items-center gap-1.5">
            <Label className="font-semibold text-lg text-primary-black/80">
              What is your occupation?
            </Label>
            <Select>
              <SelectTrigger className="w-full py-5 bg-primary-light-gray">
                <SelectValue placeholder="select your occupation" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="rbt">RBT</SelectItem>
                  <SelectItem value="Special Education Teacher">
                    Special Education Teacher
                  </SelectItem>
                  <SelectItem value="Paraprofessional">
                    Paraprofessional
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* input experience */}
          <div className="grid w-full  items-center gap-1.5">
            <Label className="font-semibold text-lg text-primary-black/80">
              How many years of sitting experience do you have?
            </Label>
            <Select>
              <SelectTrigger className="w-full py-5 bg-primary-light-gray">
                <SelectValue placeholder="> 5 years" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {[...Array(10)]?.map((_, index) => (
                    <SelectItem key={index} value={index.toString()}>
                      {index + 1} years
                    </SelectItem>
                  ))}
                  <SelectItem value={"10+"}>more than 10 years</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* input about yourself */}
          <div className="flex flex-col md:flex-row gap-x-7 gap-y-5">
            {/* ---- input   Household Details ---- */}
            <div className="grid w-full  items-center gap-1.5">
              <Label className="font-semibold text-lg text-primary-black/80">
                Tell a little about yourself, so families can get to know you.
              </Label>
              <Textarea
                rows={5}
                id="yourself"
                className="w-full  bg-primary-light-gray "
                placeholder="Write your description"
              />
            </div>
          </div>

          {/* resume */}
          <div className="grid w-full  items-center gap-1.5">
            <Label className="font-semibold text-lg text-primary-black/80">
              Resume
            </Label>
            <div className="bg-primary-light-gray py-10 w-full border-2 border-dashed flex justify-center items-center flex-col">
              <Button
                variant="outline"
                type="button"
                className="w-fit h-fit flex flex-col items-center justify-center text-gray-600 hover:text-gray-800 border-none shadow-none bg-transparent p-0 "
              >
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  onChange={handleUploadResume}
                />
                <label
                  htmlFor="fileInput"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <UploadIcon color="#FF8A00" />
                  <span className="text-sm text-primary-orange">Upload</span>
                </label>
              </Button>
              {resumeFile && (
                <div className="mt-2 flex justify-center items-center gap-x-2">
                  <p>{resumeFile.name}</p>
                  <Trash2
                    size={18}
                    color="red"
                    onClick={() => setResumeFile(null)}
                    className="cursor-pointer"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Background Check Documentation validation */}
          <div className="flex flex-col md:flex-row gap-x-7 gap-y-5">
            {/* ---- input   Household Details ---- */}
            <div className="grid w-full  items-center gap-1.5">
              <Label className="font-semibold text-lg text-primary-black/80">
                Background Check Documentation
              </Label>
              <p className="text-primary-black/75">
                Please complete a background check at your local police
                department or obtain a copy from your employer, if available.
              </p>
              <Textarea
                rows={5}
                id="validation"
                className="w-full  bg-primary-light-gray "
                placeholder="Write your background description"
              />
            </div>
          </div>

          <h4 className="text-2xl font-semibold text-primary-blue">
            For just $15 a month, you can apply for as many jobs as you like!
          </h4>

          {/* ---- Credit Card ---- */}
          <div className="space-y-7">
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

          {/* ---- Password ---- */}
          <div className="space-y-2">
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

          {/* accept terms */}
          <div className="flex space-x-2">
            <Checkbox id="terms" className="text-primary-black/50" />
            <label
              htmlFor="terms"
              className=" font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 max-w-3xl text-primary-black/70"
            >
              By checking the box, you are agreeing to Hue-man Links' terms and
              conditions. To participate, you must adhere to the guidelines,
              which will be sent to you following registration.
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
        </div>
      </form>
    </div>
  );
};

export default ConfirmBabySitterForm;
