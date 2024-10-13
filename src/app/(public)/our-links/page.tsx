import TopBanner from "@/components/shared/TopBanner";
import bannerImage from "@/assets/Images/banner2.png";
import LinksDetailsInfo from "./_components/LinksDetailsInfo";

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
    </div>
  );
};

export default OurLinksPage;
