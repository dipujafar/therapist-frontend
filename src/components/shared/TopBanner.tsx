import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";
import Container from "./Container";
import Navbar from "./Navbar";
import MovementElement from "@/animation/MovementElement";
import Link from "next/link";
import AnimatedText from "@/animation/AnimatedText";

type TProps = {
  image: StaticImageData;
  imageClass?: string;
  title?: string;
  titleClass?: string;
  btn?: string;
  btnClass?: string;
  contentClass?: string;
  btnLink?: string;
};
const TopBanner = ({
  image,
  imageClass,
  title,
  titleClass,
  btn,
  btnClass,
  contentClass,
  btnLink,
}: TProps) => {
  return (
    <div className="relative">
      <Image
        src={image}
        alt="banner-image"
        className={cn("w-full brightness-75 z-0 object-fill", imageClass)}
      ></Image>
      <Container className={cn("z-20", contentClass)}>
        {title && (
          <h3 className={cn(titleClass)}>
            <AnimatedText duration={0.5} delay={0.02}>
              {title}
            </AnimatedText>
          </h3>
        )}
        {btn && (
          <MovementElement y={"40%"} duration={0.5}>
            <Link href={btnLink ? btnLink : "#"}>
              <Button className={cn("md:mt-6 mt-2  ", btnClass)}>
                {btn?.split(" ")?.slice(0, 4)?.join(" ")} <br />
                {btn?.split(" ")?.slice(4, btn?.length)?.join(" ")}
              </Button>
            </Link>
          </MovementElement>
        )}
      </Container>
      <Navbar className="absolute mx-auto lg:top-10 top-2 w-full "></Navbar>
    </div>
  );
};

export default TopBanner;
