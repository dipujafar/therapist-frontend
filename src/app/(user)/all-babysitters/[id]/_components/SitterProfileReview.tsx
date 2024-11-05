"use client";
import { sitterReviews } from "@/utils/sitterReviews";
import { motion } from "framer-motion";
import {
  childrenVariants,
  parentVariants,
} from "@/animation/framerMotionVariants";
import { useSearchParams } from "next/navigation";
import SendReview from "./SendReview";
import ReviewCard from "@/components/shared/ReviewCard";

const SitterProfileReview = () => {
  const status = useSearchParams().get("status");
  return (
    <div>
      <h1 className="text-xl text-primary-blue font-medium mb-2">
        Reviews & Ratings
      </h1>
      <hr />

      {status === "completed" && (
        <div className="mt-5">
          <SendReview></SendReview>
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
            <ReviewCard review={review}></ReviewCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SitterProfileReview;
