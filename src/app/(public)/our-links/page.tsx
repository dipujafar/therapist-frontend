import TopBanner from "@/components/shared/TopBanner";
import bannerImage from "@/assets/Images/banner2.png";
import LinksDetailsInfo from "./_components/LinksDetailsInfo";
import TopLinks from "./_components/TopLinks";
import { Metadata } from "next";
import Reviews from "./_components/Reviews";

export const metadata: Metadata = {
  title: "Our Links",
  description: "Our Links page of Therapist",
};

const OurLinksPage = () => {
  return (
    <div>
      <TopBanner
        image={bannerImage}
        title="Our Links"
        contentClass="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
        titleClass="md:text-6xl text-3xl sm:text-xl text-center font-bold text-primary-orange truncate"
      ></TopBanner>

      <LinksDetailsInfo></LinksDetailsInfo>
      <TopLinks></TopLinks>
      <Reviews></Reviews>
    </div>
  );
};

export default OurLinksPage;
