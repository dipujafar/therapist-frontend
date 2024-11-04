import {
  childrenVariants,
  parentVariants,
} from "@/animation/framerMotionVariants";
import BookBabySitterCard from "@/components/shared/BookBabySitterCard";
import { Button } from "@/components/ui/button";
import { bookBabySitterData } from "@/utils/bookBabySitterData";
import { MessageCircleMore } from "lucide-react";
import { motion } from "framer-motion";

const BookRequests = () => {
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
              <div className="flex gap-x-4 gap-y-2 flex-col md:flex-row ">
                {/* message button */}
                <Button className="w-full bg-primary-orange hover:bg-primary-gray group">
                  <MessageCircleMore
                    size={20}
                    className="mr-2 group-hover:animate-bounce"
                  />
                  Message
                </Button>

                {/* Reject button */}
                <Button className="w-full bg-primary-orange hover:bg-primary-gray group">
                  Reject
                </Button>

                {/* Approved button */}
                <Button className="w-full bg-primary-orange hover:bg-primary-gray group">
                  Approved
                </Button>
              </div>
            </BookBabySitterCard>

            <hr />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BookRequests;
