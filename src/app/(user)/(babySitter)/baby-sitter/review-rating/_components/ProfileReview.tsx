"use client";
import {
  childrenVariants,
  parentVariants,
} from "@/animation/framerMotionVariants";
import ReviewCard from "@/components/shared/ReviewCard";
import { sitterReviews } from "@/utils/sitterReviews";
import { motion } from "framer-motion";
const ProfileReview = () => {
  return (
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
  );
};

export default ProfileReview;
