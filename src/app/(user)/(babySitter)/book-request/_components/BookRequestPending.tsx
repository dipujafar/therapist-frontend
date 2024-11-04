import {
  childrenVariants,
  parentVariants,
} from "@/animation/framerMotionVariants";
import BookBabySitterCard from "@/components/shared/BookBabySitterCard";
import { Button } from "@/components/ui/button";
import { bookBabySitterData } from "@/utils/bookBabySitterData";
import { MessageCircleMore } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedButton from "@/components/ui/AnimatedButton";

const BookRequestPending = () => {
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
            <BookBabySitterCard data={babySitter}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-x-2 gap-y-2 ">
                <Button className="w-full bg-primary-orange hover:bg-primary-gray group flex-1">
                  <MessageCircleMore
                    size={20}
                    className="mr-2 group-hover:animate-bounce"
                  />
                  Message
                </Button>
                <div className="flex-1 w-full">
                  <Link href={"/all-babysitters/0?status=completed"}>
                    <AnimatedButton className="w-full  bg-primary-orange text-primary-white border-none hover:bg-primary-orange/75  ">
                      Completed
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </BookBabySitterCard>

            <hr />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BookRequestPending;
