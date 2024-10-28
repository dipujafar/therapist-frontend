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
import { topLinksData } from "@/utlis/topLinks";
import { Dot } from "lucide-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const TopLinks = () => {
  return (
    <div className="section">
      <h2 className="text-center text-2xl md:text-5xl font-medium text-primary-blue mb-14">
        Top Links
      </h2>

      <div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            duration: 2500,
          }}
          plugins={[
            Autoplay({
              delay: 2500,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full relative"
        >
          <CarouselContent>
            {topLinksData?.map((data, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 p-2"
              >
                <Card className="pt-4 border-none shadow">
                  <CardContent className="space-y-2 px-0">
                    <div className="flex items-center gap-x-10">
                      <div className="border border-primary-orange pl-4 p-1 rounded-br-[50px] rounded-tr-xl relative shadow-xl">
                        <Dot className=" absolute -right-3 -top-3 size-10 text-primary-orange"></Dot>
                        <Image
                          src={data?.image}
                          alt={`${data?.name} image`}
                          width={1000}
                          height={700}
                          className="size-24 rounded-full"
                        ></Image>
                      </div>
                      <div>
                        <h5 className="text-2xl text-primary-green">
                          {data?.name}
                        </h5>
                        <p>{data?.experience} Years of Experience</p>
                        <p className="flex gap-x-2">
                          <Rating
                            rating={data?.rating}
                            className="w-24"
                          ></Rating>{" "}
                          5 (600)
                        </p>
                      </div>
                    </div>
                    <div className="px-4">{data?.description} </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="top-1/1 translate-y-0 left-1/2 -translate-x-1/2 mt-8  -ml-8 size-12 border-2 border-primary-blue" />
          <CarouselNext className="top-1/1 translate-y-0 left-1/2 -translate-x-1/2 mt-8 ml-8 size-12 bg-primary-orange" />
        </Carousel>
      </div>
    </div>
  );
};

export default TopLinks;
