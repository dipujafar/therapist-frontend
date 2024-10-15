import bannerImage from "@/assets/Images/banner2.png";
import TopBanner from "@/components/shared/TopBanner";

const LinkSitterPage = () => {
  return (
    <div>
      <TopBanner
        image={bannerImage}
        contentClass="absolute top-2/3 left-1/2"
        titleClass="md:text-6xl text-3xl sm:text-xl text-center font-bold text-primary-orange truncate"
      ></TopBanner>
    </div>
  );
};

export default LinkSitterPage;
