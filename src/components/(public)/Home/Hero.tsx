import banner1 from "@/assets/Images/banner1.png";
import Navbar from "@/components/shared/Navbar";
import TopBanner from "@/components/shared/TopBanner";
const Hero = () => {
  return (
    <div>
      <TopBanner
        image={banner1}
        title="Specialized Sitters, Stronger Links: Connecting Care with Compassion"
        titleClass="text-4xl max-w-2xl text-primary-white "
        contentClass="absolute top-1/2"
        imageClass="max-h-[825px] "
        btn="How to Connect with 
Specialized Links"
        btnClass="!max-w-sm bg-primary-orange font-medium"
      />
      <Navbar className="absolute mx-auto lg:top-10 top-2 w-full "></Navbar>
    </div>
  );
};

export default Hero;
