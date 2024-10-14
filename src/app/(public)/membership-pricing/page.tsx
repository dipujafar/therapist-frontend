import TopBanner from "@/components/shared/TopBanner";
import bannerImage from "@/assets/Images/banner2.png";
import Container from "@/components/shared/Container";
import { Metadata } from "next";
import MembershipPlanContainer from "./_components/MembershipPlanContainer";
import LinkRates from "./_components/LinkRates";
import OtherInformation from "./_components/OtherInformation";

export const metadata: Metadata = {
  title: "Membership and Pricing",
  description: "Membership and Pricing page of Therapist",
};

const MembershipPricingPage = () => {
  return (
    <div>
      <TopBanner
        image={bannerImage}
        contentClass="absolute top-2/3 left-1/2"
        titleClass="md:text-6xl text-3xl sm:text-xl text-center font-bold text-primary-orange truncate"
      ></TopBanner>
      <Container className="section space-y-24">
        <div>
          <h1 className="md:text-5xl text-3xl text-primary-blue font-semibold text-center">
            Membership and Pricing
          </h1>
          <hr className="mt-5  border-1 border-primary-blue max-w-5xl" />

          <hr className="mt-1 border-1 border-primary-blue max-w-5xl 2xl:translate-x-1/2  overflow-hidden" />

          <MembershipPlanContainer className="mt-16 "></MembershipPlanContainer>
        </div>
        <hr className="border-2" />
        {/* -------------------------- Link Rates section  ----------------------- */}
        <LinkRates></LinkRates>

        {/* -------------------------- Other's information section  ----------------------- */}
        <OtherInformation></OtherInformation>
      </Container>
    </div>
  );
};

export default MembershipPricingPage;
