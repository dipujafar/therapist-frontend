import banner1 from "@/assets/Images/banner1.png";
import TopBanner from "@/components/shared/TopBanner";
const Hero = () => {
  return (
    <div>
      <TopBanner
        image={banner1}
        title="Specialized Sitters, Stronger Links: Connecting Care with Compassion"
        titleClass="md:text-4xl text-xl max-w-2xl text-primary-white font-semibold "
        contentClass="absolute lg:top-1/2 top-1/3"
        imageClass="max-h-[100vh] "
        btn="How to Connect with Specialized Links"
        btnClass=" bg-primary-orange font-medium py-8  text-lg "
      />
    </div>
  );
};

export default Hero;
