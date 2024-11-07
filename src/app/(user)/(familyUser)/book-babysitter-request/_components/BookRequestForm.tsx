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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import AvailabilitySelector from "@/components/ui/availability-selector";

const BookRequestForm = () => {
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
              Select Date
            </Label>
            <AvailabilitySelector
              control={control}
              name="availability"
              defaultValue={{ day: "Monday", timeSlots: [] }}
            />
          </div>
          {/* input name */}
          <div className="grid w-full  items-center gap-1.5">
            <Label className="font-semibold text-lg text-primary-black/80">
              Full Name
            </Label>
            <Input
              type="name"
              id="primaryParentFirstName"
              placeholder="enter your full name"
              className="w-full py-5 bg-primary-light-gray "
            />
          </div>
          {/* input address */}
          <div className="grid w-full  items-center gap-1.5">
            <Label className="font-semibold text-lg text-primary-black/80">
              Address
            </Label>
            <Input
              type="text"
              id="address"
              placeholder="enter your address"
              className="w-full py-5 bg-primary-light-gray "
            />
          </div>
          {/* Characteristics of the children */}
          <div className="grid w-full  items-center gap-1.5">
            <Label className="font-semibold text-lg text-primary-black/80">
              Characteristics of the children
            </Label>
            <Input
              type="text"
              id="children"
              placeholder="write characteristics of the children"
              className="w-full py-5 bg-primary-light-gray "
            />
          </div>

          {/* input number of children */}
          <div className="grid w-full  items-center gap-1.5">
            <Label className="font-semibold text-lg text-primary-black/80">
              Number of children
            </Label>
            <Input
              type="number"
              id="children"
              placeholder="enter number of children"
              className="w-full py-5 bg-primary-light-gray "
            />
          </div>
          {/* input age of children */}
          <div className="grid w-full  items-center gap-1.5">
            <Label className="font-semibold text-lg text-primary-black/80">
              Age of children
            </Label>
            <Input
              type="number"
              id="children"
              placeholder="enter age of children"
              className="w-full py-5 bg-primary-light-gray "
            />
          </div>

          {/* ---- input   Description ---- */}
          <div className="grid w-full  items-center gap-1.5">
            <Label className="font-semibold text-lg text-primary-black/80">
              Description
            </Label>
            <Textarea
              rows={5}
              id="description"
              placeholder="write you description here"
              className="w-full  bg-primary-light-gray "
            />
          </div>

          <p className="text-xl font-semibold text-primary-blue ">
            About your family
          </p>
          {/* input language */}
          <div className="grid w-full  items-center gap-1.5">
            <Label className="font-semibold text-lg text-primary-black/80">
              Languages
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

          {/* input number of pets */}
          <div className="grid w-full  items-center gap-1.5">
            <Label className="font-semibold text-lg text-primary-black/80">
              Number of pets
            </Label>
            <Input
              type="number"
              id="pets"
              placeholder="enter number of pets"
              className="w-full py-5 bg-primary-light-gray "
            />
          </div>

          {/* input number of location */}
          <div className="grid w-full  items-center gap-1.5">
            <Label className="font-semibold text-lg text-primary-black/80">
              Location
            </Label>
            <Input
              type="text"
              id="location"
              placeholder="enter your location"
              className="w-full py-5 bg-primary-light-gray "
            />
          </div>

          {/* ---- Submit Button ---- */}

          <div className="flex justify-center gap-x-5 flex-wrap gap-y-2">
            <Button
              variant="outline"
              className="border-primary-orange text-primary-orange px-10 py-6 text-xl"
            >
              Cancel
            </Button>

            <Button
              type="button"
              className="bg-primary-orange text-primary-white px-10 py-6 text-xl"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookRequestForm;
