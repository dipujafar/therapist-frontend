import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-[2520px] mx-auto 2xl:px-48 xl:px-24 lg:px-16  md:px-10 px-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
