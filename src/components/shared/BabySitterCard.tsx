import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import { Rating } from "../ui/rating";
import {
  CalendarDays,
  ChevronRight,
  MapPinHouse,
  SquareLibrary,
} from "lucide-react";

type TDataType = {
  name: string;
  image: string | StaticImageData;
  rating: number;
  location: string;
  experience: string;
  booking: number;
  description: string;
};

const BabySitterCard = ({ data }: { data: TDataType }) => {
  return (
    <Card className="border-none shadow-lg">
      <CardContent className="flex flex-col lg:flex-row lg:items-start justify-center items-center  gap-6 pt-6">
        {/* image and rating */}
        <div className="flex flex-col justify-center items-center gap-y-2">
          <Image
            src={data?.image}
            alt="baby sitter"
            width={1000}
            height={900}
            className="lg:size-36 size-52"
          ></Image>
          <div className="flex gap-x-2 items-center ">
            <Rating
              size={18}
              rating={data?.rating}
              className="text-[#FFA14E]"
            ></Rating>
            <p className="text-primary-gray">
              {data?.rating} <span>(12)</span>
            </p>
          </div>
        </div>

        {/* name, address, description */}
        <div className=" flex-1 flex flex-col   gap-y-6 ">
          <h4 className="text-xl lg:text-3xl font-medium text-primary-black">
            {data?.name}
          </h4>

          {/* location , experience, booking */}
          <div className="flex flex-col md:flex-row gap-2 justify-between lg:items-center">
            <p className="flex gap-x-2 items-center text-lg text-primary-gray">
              <MapPinHouse color="#F26D6D" size={20} />
              {data?.location}
            </p>
            <p className="flex  gap-2 items-center text-lg text-primary-gray">
              <SquareLibrary color="#F26D6D" size={20} />
              <span className="flex items-center">
                Experience : <ChevronRight />
                {data?.experience}
              </span>
            </p>
            <p className="flex gap-x-2 items-center text-lg text-primary-gray">
              <CalendarDays color="#F26D6D" size={20} />
              Booking : {data?.booking}
            </p>
          </div>

          {/* description */}
          <p className="text-lg text-primary-gray">{data?.description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BabySitterCard;
