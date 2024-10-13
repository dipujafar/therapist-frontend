import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";
import Container from "./Container";

type TProps = {
  image: StaticImageData;
  imageClass?: string;
  title?: string;
  titleClass?: string;
  btn?: string;
  btnClass?: string;
  contentClass?: string;
};
const TopBanner = ({
  image,
  imageClass,
  title,
  titleClass,
  btn,
  btnClass,
  contentClass,
}: TProps) => {
  return (
    <div className="relative">
      <Image
        src={image}
        alt="banner-image"
        className={cn("w-full brightness-75 z-0 object-fill", imageClass)}
      ></Image>
      <Container className={cn("z-20", contentClass)}>
        {title && <h3 className={cn(titleClass)}>{title}</h3>}
        {btn && (
          <Button className={cn("md:mt-6 mt-2  ", btnClass)}>
            {btn?.split(" ")?.slice(0, 4)?.join(" ")} <br />
            {btn?.split(" ")?.slice(4, btn?.length)?.join(" ")}
          </Button>
        )}
      </Container>
    </div>
  );
};

export default TopBanner;
