"use client";
import sitterProfile from "@/assets/Images/singleSitter/sitterProfileImage.png";
import { Rating } from "@/components/ui/rating";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const SitterBanner = () => {
  const [fill, setFill] = useState(false);
  let role = "babysitter";
  return (
    <div className="flex flex-col md:flex-row items-center justify-center lg:gap-x-20 gap-x-10 gap-y-5 py-8 bg-gradient-to-r from-[#038C7F] to-[#558399] px-5 relative">
      {/* profile Image */}
      <Image
        src={sitterProfile}
        alt="Sitter Profile Image"
        width={1900}
        height={1600}
        className="size-64 rounded-full border border-primary-blue"
      ></Image>

      {/* profile details */}
      <div className="text-primary-white flex flex-col items-center gap-y-5">
        <h1 className="lg:text-5xl text-3xl font-medium">Dyneja Tracy</h1>
        <p className="lg:text-lg">Babysitting job in Way Rockland, ME</p>
        <div className="flex gap-x-2 items-center">
          <Rating rating={4}></Rating>
          <span className="lg:text-lg font-bold">4.0</span>
          <span className="lg:text-lg font-bold">(12)</span>
        </div>
      </div>

      {/* Favorite Button */}

      {role === "familyUser" && (
        <div
          className="absolute top-4 right-4 bg-foundation-white p-2 rounded-full cursor-pointer"
          onClick={() => setFill(!fill)}
        >
          <Heart
            fill={fill ? "#F26D6D" : "#FEF0F0"}
            className={fill ? "text-[#F26D6D]" : ""}
          />
        </div>
      )}
    </div>
  );
};

export default SitterBanner;
