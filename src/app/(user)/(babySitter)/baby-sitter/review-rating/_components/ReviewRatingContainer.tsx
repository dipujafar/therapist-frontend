import { Progress } from "@/components/ui/progressbar";
import { Star } from "lucide-react";
import React from "react";
import ProfileReview from "./ProfileReview";

const ReviewRatingContainer = () => {
  return (
    <div className="space-y-10">
      <div className="flex md:flex-row flex-col justify-center  gap-x-16 gap-y-5">
        <div className="mx-auto">
          <div className="flex items-center gap-2">
            <h1 className="text-5xl font-medium">4.8</h1>
            <Star fill="#000" size={40}></Star>
          </div>
          <div className="mt-4 w-fit">
            <p>1,64,002 Ratings</p>
            <p className="text-center">&</p>
            <p className="text-center">5,922 Reviews</p>
          </div>
        </div>

        {/* previous ratings */}
        <div className="flex-1">
          <div className="flex items-center gap-14">
            <div className="flex gap-1 text-[#F8B84E]">
              <h1 className="text-xl font-medium">5</h1>
              <Star fill="#F8B84E" />
            </div>
            <Progress
              value={16}
              totalValue={20}
              className="max-h-[14px] max-w-[600px]"
            ></Progress>
          </div>
          <div className="flex items-center gap-14">
            <div className="flex gap-1 text-[#F8B84E]">
              <h1 className="text-xl font-medium">4</h1>
              <Star fill="#F8B84E" />
            </div>
            <Progress
              value={13}
              totalValue={20}
              className="max-h-[14px] max-w-[600px]"
            ></Progress>
          </div>
          <div className="flex items-center gap-14">
            <div className="flex gap-1 text-[#F8B84E]">
              <h1 className="text-xl font-medium">3</h1>
              <Star fill="#F8B84E" />
            </div>
            <Progress
              value={8}
              totalValue={20}
              className="max-h-[14px] max-w-[600px]"
            ></Progress>
          </div>
          <div className="flex items-center gap-14">
            <div className="flex gap-1 text-[#F8B84E]">
              <h1 className="text-xl font-medium">2</h1>
              <Star fill="#F8B84E" />
            </div>
            <Progress
              value={8}
              totalValue={20}
              className="max-h-[14px] max-w-[600px]"
            ></Progress>
          </div>
          <div className="flex items-center gap-14">
            <div className="flex gap-1 text-[#F8B84E]">
              <h1 className="text-xl font-medium">1</h1>
              <Star fill="#F8B84E" />
            </div>
            <Progress
              value={12}
              totalValue={10}
              className="max-h-[14px] max-w-[600px]"
            ></Progress>
          </div>
        </div>
      </div>

      {/* reviews */}
      <ProfileReview></ProfileReview>
    </div>
  );
};

export default ReviewRatingContainer;
