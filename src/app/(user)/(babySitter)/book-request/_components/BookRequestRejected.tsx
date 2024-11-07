import {
  childrenVariants,
  parentVariants,
} from "@/animation/framerMotionVariants";
import BookRequestCard from "@/components/shared/BabySitter/BookRequestCard";
import { bookBabySitterData } from "@/utils/bookBabySitterData";
import { motion } from "framer-motion";

const BookRequestRejected = () => {
  return (
    <div>
      <motion.div
        variants={parentVariants}
        whileInView="animate"
        initial="initial"
        exit="exit"
        className="grid grid-cols-1  xl:w-[70%] mx-auto gap-y-10 "
      >
        {bookBabySitterData?.map((babySitter, index) => (
          <motion.div
            variants={childrenVariants}
            key={index}
            className="lg:space-y-10 space-y-5"
          >
            <BookRequestCard data={babySitter}>
              <hr />
              <p className="text-lg text-primary-gray mt-2">
                Reason: Last time this clint did not behave so well.
              </p>
            </BookRequestCard>

            <hr />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BookRequestRejected;
