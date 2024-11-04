import { AlignJustify } from "lucide-react";
import icon1 from "@/assets/icons/sitter/sitterPageIcon1.png";
import icon2 from "@/assets/icons/sitter/sitterPageIcon2.png";
import icon3 from "@/assets/icons/sitter/sitterPageIcon3.png";
import Image from "next/image";

const characteristics = ["Creative", "Caring", "Patient"];

const ProfileDetails = () => {
  return (
    <div className="lg:space-y-10 space-y-5">
      <p className="text-lg text-primary-gray">
        Hi! We are a family of 6 traveling for a year. We will be in Kuala
        Lumpur for 3 weeks and would like some help throughout the day. The help
        may be at our apartment by yourself so mom can get out to do a few
        things or with mom on adventures to different activities. We are
        flexible with the schedule. Helping with light meals, picking up after
        kids, kids laundry would be a bonus, but not required.
      </p>

      {/* Characteristics */}
      <div className="space-y-5">
        <div className="flex items-center gap-x-2">
          <AlignJustify color="#F26D6D" />
          <h5 className="text-xl font-medium">Characteristics</h5>
        </div>
        <div className="flex  gap-x-2">
          {characteristics.map((characteristic) => (
            <p
              className="text-lg text-primary-violet py-1 px-3 bg-primary-violet/15 rounded-full font-medium"
              key={characteristic}
            >
              {characteristic}
            </p>
          ))}
        </div>
      </div>
      <hr />

      {/* statistics */}
      <div className="lg:space-y-5 space-y-3">
        <div className="flex items-center gap-x-4">
          <Image src={icon1} alt="icon1"></Image>
          <div className="text-lg font-medium text-primary-black">
            <h4>Completed Sits</h4>
            <p>31</p>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <Image src={icon2} alt="icon1"></Image>
          <div className="text-lg font-medium text-primary-black">
            <h4>Age</h4>
            <p>24 year</p>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <Image src={icon3} alt="icon1"></Image>
          <div className="text-lg font-medium text-primary-black">
            <h4>Completed Sits</h4>
            <p>31</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
