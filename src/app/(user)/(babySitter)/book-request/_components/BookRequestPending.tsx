import {
  childrenVariants,
  parentVariants,
} from "@/animation/framerMotionVariants";
import { Button } from "@/components/ui/button";
import { bookBabySitterData } from "@/utils/bookBabySitterData";
import { MessageCircleMore } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedButton from "@/components/ui/AnimatedButton";
import BookRequestCard from "@/components/shared/BabySitter/BookRequestCard";

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
            <BookRequestCard data={babySitter}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-x-2 gap-y-2 ">
                <div className="flex-1">
                  <Link href={"/message"}>
                    <Button className="w-full bg-primary-orange hover:bg-primary-gray group flex-1">
                      <MessageCircleMore
                        size={20}
                        className="mr-2 group-hover:animate-ping"
                      />
                      Message
                    </Button>
                  </Link>
                </div>
                <div className="flex-1 w-full">
                  <Link href={"/family-user/0?status=completed"}>
                    <AnimatedButton className="w-full  bg-primary-orange text-primary-white border-none hover:bg-primary-orange/75  ">
                      Completed
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </BookRequestCard>

            <hr />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BookRequestPending;
