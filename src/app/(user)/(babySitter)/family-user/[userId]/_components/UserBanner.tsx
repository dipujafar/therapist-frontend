import { Rating } from "@/components/ui/rating";
import Image from "next/image";
import familyUserProfile from "@/assets/Images/familyUserImage.png";

const UserBanner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center lg:gap-x-20 gap-x-10 gap-y-5 py-8 bg-gradient-to-r from-[#038C7F] to-[#558399] px-5 relative">
      {/* profile Image */}
      <Image
        src={familyUserProfile}
        alt="Sitter Profile Image"
        width={1900}
        height={1600}
        className="size-64 rounded-full border border-primary-blue"
      ></Image>

      {/* profile details */}
      <div className="text-primary-white flex flex-col items-center gap-y-5">
        <h1 className="lg:text-5xl text-3xl font-medium">James Tracy</h1>
        <p className="lg:text-lg">Sitting Job in Way Rockland, ME</p>
      </div>
    </div>
  );
};

export default UserBanner;
