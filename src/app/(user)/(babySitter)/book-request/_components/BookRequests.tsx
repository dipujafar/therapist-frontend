import {
  childrenVariants,
  parentVariants,
} from "@/animation/framerMotionVariants";
import { Button } from "@/components/ui/button";
import { bookBabySitterData } from "@/utils/bookBabySitterData";
import { MessageCircleMore } from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import BookRequestCard from "@/components/shared/BabySitter/BookRequestCard";

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
            <BookRequestCard data={babySitter}>
              <div className="flex gap-x-4 gap-y-2 flex-col md:flex-row ">
                {/* message button */}
                <Button className="w-full bg-primary-orange hover:bg-primary-gray group">
                  <MessageCircleMore
                    size={20}
                    className="mr-2 group-hover:animate-ping"
                  />
                  Message
                </Button>

                {/* Reject button */}

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-primary-orange hover:bg-primary-gray group">
                      Reject
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogDescription className="text-2xl text-center text-primary-blue font-medium mt-5">
                        Why do you want to reject this appointment?
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div>
                        <Textarea
                          className=""
                          rows={8}
                          placeholder="write here reject issue"
                        ></Textarea>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        type="submit"
                        className="w-full bg-primary-orange"
                      >
                        Submit
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                {/* Approved button */}
                <Button className="w-full bg-primary-orange hover:bg-primary-gray group">
                  Approved
                </Button>
              </div>
            </BookRequestCard>

            <hr />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BookRequests;
