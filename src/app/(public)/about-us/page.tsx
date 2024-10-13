import TopBanner from "@/components/shared/TopBanner";
import { Metadata } from "next";
import bannerImage from "@/assets/Images/banner2.png";
import Mission from "./_components/Mission";
import WhoWeAre from "./_components/WhoWeAre";
import MeetConnector from "./_components/MeetConnector";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Us page of Therapist",
};

const AboutUsPage = () => {
  return (
    <div>
      <TopBanner
        image={bannerImage}
        title="About Us"
        contentClass="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
        titleClass="md:text-6xl text-3xl sm:text-xl text-center font-bold text-primary-orange truncate"
      ></TopBanner>
      <Mission></Mission>
      <WhoWeAre></WhoWeAre>
      <MeetConnector></MeetConnector>
    </div>
  );
};

export default AboutUsPage;
