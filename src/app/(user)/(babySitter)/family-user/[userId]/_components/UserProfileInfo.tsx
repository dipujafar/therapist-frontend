import { Button } from "@/components/ui/button";
import { MessageCircleMore } from "lucide-react";

import icon2 from "@/assets/icons/sitter/sitterPageIcon5.png";
import icon3 from "@/assets/icons/user/petIcon.png";
import icon4 from "@/assets/icons/user/petIcon.png";
import Image from "next/image";
import Link from "next/link";

const UserProfileInfo = () => {
  return (
    <div className="lg:space-y-10 space-y-5">
      {/* Contact Button */}
      <Link href={"/message"}>
        <Button className="w-full py-6 bg-primary-orange group hover:bg-primary-orange/75">
          Contact James
          <MessageCircleMore className="ml-2 group-hover:animate-ping" />
        </Button>
      </Link>

      {/* about the sitter */}
      <div className="lg:space-y-6 space-y-3">
        <h4 className="text-3xl text-primary-blue font-medium">
          About our family
        </h4>
        <div className="bg-[#F3F4F4] rounded-2xl lg:py-10 py-5 space-y-4">
          <div className="px-8 flex justify-between items-center">
            <div className=" flex gap-x-4">
              <Image src={icon2} alt="icon"></Image>
              <p className="text-[#707071] font-medium">Languages we speak</p>
            </div>
            <h3 className="font-medium text-primary-blue">English</h3>
          </div>
          <hr />
          <div className="px-8 flex justify-between gap-x-2 items-center">
            <div className=" flex gap-x-4">
              <Image src={icon3} alt="icon"></Image>
              <p className="text-[#707071] font-medium">Number of pets</p>
            </div>
            <h3 className="font-medium text-primary-blue max-w-[45%] text-end">
              2 dogs
            </h3>
          </div>
          <hr />
          <div className="px-8 flex justify-between items-center">
            <div className=" flex gap-x-4">
              <Image src={icon4} alt="icon"></Image>
              <p className="text-[#707071] font-medium">Location</p>
            </div>
            <h3 className="font-medium text-primary-blue">New York</h3>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default UserProfileInfo;
