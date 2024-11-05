import {
  childrenVariants,
  parentVariants,
} from "@/animation/framerMotionVariants";
import BookBabySitterCard from "@/components/shared/Family/BookBabySitterCard";
import { Button } from "@/components/ui/button";
import { bookBabySitterData } from "@/utils/bookBabySitterData";
import { motion } from "framer-motion";
import { MessageCircleMore } from "lucide-react";

const BookSitterRequest = () => {
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
              <Button className="w-full bg-primary-orange hover:bg-primary-gray group">
                <MessageCircleMore
                  size={20}
                  className="mr-2 group-hover:animate-ping"
                />
                Message
              </Button>
            </BookBabySitterCard>

            <hr />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BookSitterRequest;
