"use client";
import {
  childrenVariants,
  parentVariants,
} from "@/animation/framerMotionVariants";
import BabySitterCard from "@/components/shared/BabySitterCard";
import { allBabySitters } from "@/utils/allBabySitter";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Pagination } from "react-pagination-bar";

const FavoriteBabySitters = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pagePostsLimit = 6;
  return (
    <div>
      <motion.div
        variants={parentVariants}
        whileInView="animate"
        initial="initial"
        exit="exit"
        className="grid grid-cols-1  xl:w-[70%] mx-auto gap-y-10 "
      >
        {allBabySitters
          ?.slice(
            (currentPage - 1) * pagePostsLimit,
            currentPage * pagePostsLimit
          )
          ?.map((babySitter, index) => (
            <motion.div
              variants={childrenVariants}
              key={index}
              className="lg:space-y-10 space-y-5"
            >
              <div className="relative">
                <Link href={`/all-babysitters/${index}`}>
                  <BabySitterCard data={babySitter}></BabySitterCard>
                </Link>

                {/* Favorite Button */}
                <div className="absolute top-4 right-4 bg-foundation-white p-2 rounded-full cursor-pointer">
                  <Heart fill="#F26D6D" className="text-[#F26D6D]" />
                </div>
              </div>
              <hr />
            </motion.div>
          ))}
      </motion.div>

      {/*pagination  */}
      <div className="mt-10 text-end  xl:w-[70%] mx-auto">
        <Pagination
          currentPage={currentPage}
          itemsPerPage={pagePostsLimit}
          onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
          totalItems={allBabySitters?.length}
          pageNeighbours={2}
        />
      </div>
    </div>
  );
};

export default FavoriteBabySitters;
