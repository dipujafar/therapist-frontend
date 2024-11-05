import { Card, CardContent } from "@/components/ui/card";
import { Rating } from "@/components/ui/rating";
import Image from "next/image";

const ReviewCard = ({ review }: any) => {
  return (
    <Card className="border-none shadow-[0px 1px 10px 0px #0000001A] pt-5 px-6 max-w-4xl">
      <CardContent className="space-y-5">
        <div className="flex items-center gap-x-5">
          <Image
            src={review?.image}
            alt="reviewer image"
            width={900}
            height={700}
            className="size-20 rounded-full"
          ></Image>
          <div className="space-y-1">
            <h4 className="text-lg  font-medium">{review?.name}</h4>
            <p className="text-primary-gray">{review?.designation}</p>
            <Rating rating={review?.rating} size={20}></Rating>
          </div>
        </div>
        <div>
          <p className="text-primary-gray">{review?.comment}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
