"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Rating } from "@/components/ui/rating";
import { topLinksData } from "@/utils/topLinks";
import { Dot } from "lucide-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { reviewData } from "@/utils/reviews";

const Reviews = () => {
  return (
    <div className="section mt-20">
      <div></div>
      <h2 className="text-center text-lg md:text-2xl  text-primary-blue mb-4 font-semibold">
        Reviews
      </h2>
      <h2 className="text-center text-xl md:text-4xl  text-primary-black mb-14 font-semibold">
        What families are saying about our <br /> services!
      </h2>

      <div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            duration: 3000,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full relative"
        >
          <CarouselContent>
            {reviewData?.map((data, index) => (
              <CarouselItem key={index} className=" lg:basis-1/2 2xl:basis-1/3">
                <div className="flex items-center ">
                  <Image
                    src={data?.image}
                    alt={`${data?.name} image`}
                    width={1000}
                    height={700}
                    className="size-24 rounded-full relative -top-10 left-10"
                  ></Image>
                  <Card className="pt-8">
                    <CardContent className="space-y-4 py-6 pl-16">
                      <div className="space-y-1">
                        <h4 className="text-xl font-bold">{data?.name}</h4>
                        <p className="text-primary-gray font-bold">
                          {data?.designation}
                        </p>
                      </div>
                      <Rating rating={data?.rating} color="text-[#F3CD03]" />
                      <p className=" text-primary-gray">{data?.comment} </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="top-1/1 translate-y-0 left-1/2 -translate-x-1/2 mt-10  -ml-8 size-12 border-2 border-primary-blue" />
          <CarouselNext className="top-1/1 translate-y-0 left-1/2 -translate-x-1/2 mt-10 ml-8 size-12 bg-primary-orange" />
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
