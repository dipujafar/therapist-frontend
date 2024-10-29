"use client";
import MovementElement from "@/animation/MovementElement";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Rating } from "@/components/ui/rating";
import { allBabySitters } from "@/utils/allBabySitter";
import {
  CalendarDays,
  ChevronRight,
  MapPinHouse,
  Search,
  SquareLibrary,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Pagination } from "react-pagination-bar";
import { motion } from "framer-motion";
import {
  childrenVariants,
  parentVariants,
} from "@/animation/framerMotionVariants";
import Link from "next/link";

const AllBabySittersContainer = () => {
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const pagePostsLimit = 6;
  return (
    <div className="lg:space-y-14 space-y-6">
      <MovementElement duration={0.1} y="-20%">
        <div className="relative hidden w-2/3 items-center lg:flex xl:w-1/2 mx-auto">
          <Input
            type="text"
            placeholder="search city/zipcode"
            className="w-full rounded-3xl pl-14 py-8 border-2 border-light-gray shadow-md"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <Search
            className="absolute left-4 border-none font-light"
            size={24}
          />
        </div>
      </MovementElement>

      {/* all baby sitters cards */}

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
              <Link href={`/all-babysitters/${index}`}>
                <Card className="border-none shadow-[0px 1px 10px 0px #0000001A]">
                  <CardContent className="flex flex-col lg:flex-row lg:items-start justify-center items-center  gap-6 pt-6">
                    {/* image and rating */}
                    <div className="flex flex-col justify-center items-center gap-y-2">
                      <Image
                        src={babySitter?.image}
                        alt="baby sitter"
                        width={1000}
                        height={900}
                        className="lg:size-36 size-52"
                      ></Image>
                      <div className="flex gap-x-2 items-center ">
                        <Rating
                          size={18}
                          rating={babySitter?.rating}
                          className="text-[#FFA14E]"
                        ></Rating>
                        <p className="text-primary-gray">
                          {babySitter?.rating} <span>(12)</span>
                        </p>
                      </div>
                    </div>

                    {/* name, address, description */}
                    <div className=" flex-1 flex flex-col   gap-y-6 ">
                      <h4 className="text-xl lg:text-3xl font-medium text-primary-black">
                        {babySitter?.name}
                      </h4>

                      {/* location , experience, booking */}
                      <div className="flex flex-col md:flex-row gap-2 justify-between lg:items-center">
                        <p className="flex gap-x-2 items-center text-lg text-primary-gray">
                          <MapPinHouse color="#F26D6D" size={20} />
                          {babySitter?.location}
                        </p>
                        <p className="flex  gap-2 items-center text-lg text-primary-gray">
                          <SquareLibrary color="#F26D6D" size={20} />
                          <span className="flex items-center">
                            Experience : <ChevronRight />
                            {babySitter?.experience}
                          </span>
                        </p>
                        <p className="flex gap-x-2 items-center text-lg text-primary-gray">
                          <CalendarDays color="#F26D6D" size={20} />
                          Booking : {babySitter?.booking}
                        </p>
                      </div>

                      {/* description */}
                      <p className="text-lg text-primary-gray">
                        {babySitter?.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
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

export default AllBabySittersContainer;
