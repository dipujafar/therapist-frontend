"use client";
import { Button } from "@/components/ui/button";
import icon1 from "@/assets/icons/sitter/sitterPageIcon4.png";
import icon2 from "@/assets/icons/sitter/sitterPageIcon5.png";
import icon3 from "@/assets/icons/sitter/sitterPageIcon6.png";
import icon4 from "@/assets/icons/sitter/sitterPageIcon7.png";
import Image from "next/image";
import { MessageCircleMore } from "lucide-react";
import Link from "next/link";

const ProfileInfo = () => {
  let role = "familyUser";
  console.log(role);
  return (
    <div className="lg:space-y-10 space-y-5">
      {/* Contact Button */}
      {role === "familyUser" && (
        <Link href={"/book-babysitter-request"}>
          <Button className="w-full py-6 bg-primary-orange group hover:bg-primary-orange/75">
            Contact Dyneja{" "}
          </Button>
        </Link>
      )}

      {/* Availability schedule */}
      <div className="lg:space-y-6 space-y-3">
        <h4 className="text-3xl text-primary-blue font-medium">Availability</h4>
        <div className="lg:space-y-5 space-y-2">
          <div className="space-y-2">
            <h5 className="text-xl font-bold">Monday</h5>
            <p className="text-lg font-medium text-primary-gray">
              10:00 AM - 12:00 PM
            </p>
          </div>
          <div className="space-y-2">
            <h5 className="text-xl font-bold">Tuesday</h5>
            <p className="text-lg font-medium text-primary-gray">
              10:00 AM - 12:00 PM
            </p>
          </div>
          <div className="space-y-2">
            <h5 className="text-xl font-bold">Wednesday</h5>
            <p className="text-lg font-medium text-primary-gray">
              10:00 AM - 12:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* about the sitter */}
      <div className="lg:space-y-6 space-y-3">
        <h4 className="text-3xl text-primary-blue font-medium">About Me</h4>
        <div className="bg-[#F3F4F4] rounded-2xl lg:py-10 py-5 space-y-4">
          <div className="px-8 flex justify-between items-center">
            <div className=" flex gap-x-4">
              <Image src={icon1} alt="icon"></Image>
              <p className="text-[#707071] font-medium">Car</p>
            </div>
            <h3 className="font-medium text-primary-blue">No</h3>
          </div>
          <hr />
          <div className="px-8 flex justify-between items-center">
            <div className=" flex gap-x-4">
              <Image src={icon2} alt="icon"></Image>
              <p className="text-[#707071] font-medium">
                Languages that i speak
              </p>
            </div>
            <h3 className="font-medium text-primary-blue">English</h3>
          </div>
          <hr />
          <div className="px-8 flex justify-between gap-x-2 items-center">
            <div className=" flex gap-x-4">
              <Image src={icon3} alt="icon"></Image>
              <p className="text-[#707071] font-medium">Education</p>
            </div>
            <h3 className="font-medium text-primary-blue max-w-[45%] text-end">
              High School Degree CPR Certified
            </h3>
          </div>
          <hr />
          <div className="px-8 flex justify-between items-center">
            <div className=" flex gap-x-4">
              <Image src={icon4} alt="icon"></Image>
              <p className="text-[#707071] font-medium">Occupation</p>
            </div>
            <h3 className="font-medium text-primary-blue">RBT</h3>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
