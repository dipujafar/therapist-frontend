import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TProps = {
  className?: string;
  title?: string;
  subTitle?: string;
  children?: ReactNode;
};
const InfoDynamicCard = ({ className, title, subTitle, children }: TProps) => {
  return (
    <div className={cn("px-3 py-5  rounded-lg text-center", className)}>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <h6 className="font-semibold max-w-sm mx-auto">{subTitle}</h6>
      <div>{children}</div>
    </div>
  );
};

export default InfoDynamicCard;
