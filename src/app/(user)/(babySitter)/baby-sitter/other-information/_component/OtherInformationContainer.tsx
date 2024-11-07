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
import { Button } from "@/components/ui/button";
import { useState } from "react";

const OtherInformationContainer = () => {
  const { register, handleSubmit, control, reset, setValue } = useForm();

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
                <RadioGroupItem checked value="yes" id="r1" />
                <Label>Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="r2" />
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
              defaultValues={["Responsible", "Reliable", "Friendly"]}
            />
          </div>

          {/* input language */}
          <div className="grid w-full  items-center gap-1.5">
            <Label className="font-semibold text-lg text-primary-black/80">
              Which language do you speak?
            </Label>
            <Select defaultValue={"english"}>
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
            <Select defaultValue="higher_education">
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
            <Select defaultValue="Paraprofessional">
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
            <Select defaultValue="4">
              <SelectTrigger className="w-full py-5 bg-primary-light-gray">
                <SelectValue placeholder="> 5 years" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {[...Array(10)]?.map((_, index) => (
                    <SelectItem key={index} value={(index + 1).toString()}>
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
                defaultValue={
                  "I am a caring, reliable and friendly babysitter with years of experience in childcare."
                }
                rows={5}
                id="yourself"
                className="w-full  bg-primary-light-gray "
                placeholder="Write your description"
              />
            </div>
          </div>

          {/* ---- Submit Button ---- */}
          <div className="flex justify-center gap-x-5 flex-wrap gap-y-2">
            <Button className="bg-primary-orange text-primary-white px-10 py-6 text-xl">
              Save Change
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OtherInformationContainer;
