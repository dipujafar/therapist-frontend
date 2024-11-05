"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Rating } from "@/components/ui/rating";
import { sitterReviews } from "@/utils/sitterReviews";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  childrenVariants,
  parentVariants,
} from "@/animation/framerMotionVariants";
import { useSearchParams } from "next/navigation";
import SendFeedback from "./SendFeedback";

const ProfileReviewRating = () => {
  const status = useSearchParams().get("status");
  return (
    <div>
      <h1 className="text-xl text-primary-blue font-medium mb-2">
        Reviews & Ratings
      </h1>
      <hr />

      {status === "completed" && (
        <div className="mt-5">
          <SendFeedback></SendFeedback>
        </div>
      )}
      <motion.div
        variants={parentVariants}
        initial="initial"
        whileInView="animate"
        exit="exit"
        className="mt-16 md:mt-6 flex flex-col gap-y-5"
      >
        {sitterReviews?.map((review, index) => (
          <motion.div variants={childrenVariants} key={index}>
            <Card className="border-none shadow-[0px 1px 10px 0px #0000001A] pt-5 px-6">
              <CardContent className="space-y-5">
                <div className="flex items-center gap-x-5">
                  <Image
                    src={review?.image}
                    alt="reviewer image"
                    width={900}
                    height={700}
                    className="size-20 rounded-full"
                  ></Image>
                  <div className="">
                    <h4 className="text-lg  font-medium">{review?.name}</h4>
                    <p className="text-primary-gray">{review?.designation}</p>
                    <Rating rating={review?.rating} size={20}></Rating>
                  </div>
                </div>
                <div>
                  <p className="text-primary-gray">{review?.comment}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProfileReviewRating;
