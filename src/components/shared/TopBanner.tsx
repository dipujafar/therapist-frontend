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
        className={cn("w-full brightness-75", imageClass)}
      ></Image>
      <Container className={cn(contentClass)}>
        {title && <h3 className={cn(titleClass)}>{title}</h3>}
        {btn && (
          <Button className={cn("mt-6 max-w-sm", btnClass)}>{btn}</Button>
        )}
      </Container>
    </div>
  );
};

export default TopBanner;
