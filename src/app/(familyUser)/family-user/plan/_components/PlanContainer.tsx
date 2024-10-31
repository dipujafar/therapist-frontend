import InfoDynamicCard from "@/app/(public)/membership-pricing/_components/InfoDynamicCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PlanContainer = () => {
  return (
    <div className=" flex flex-col lg:gap-y-8 gap-4 justify-center items-center">
      <h1 className="lg:text-5xl text-3xl font-bold text-primary-orange">
        My <span className="text-primary-blue ">Plan</span>
      </h1>
      <h1 className="w-full text bg-deep-blue rounded text-primary-white text-center lg:text-3xl text-xl py-2 font-medium px-2">
        Connect Sometimes
      </h1>
      <p className="max-w-5xl text-center font-medium text-primary-black">
        Upgrade your plan based on your specific needs. With a paid membership,
        you can easily connect with potential clients and increase engagement,
        ensuring better communication and higher response rates for your
        business.
      </p>
      <div className="max-w-md">
        <InfoDynamicCard
          className="bg-[#5B4373] text-primary-white space-y-3   border-b-[6px] border-b-[#FBD2D2] border-r-[6px] border-r-[#FBD2D2]"
          title="Connect Sometimes"
          subTitle="$25 per request + Linkers’ hourly rate"
        >
          <div className="space-y-3">
            <p>
              Membership is perfect for families who need flexible sitting
              support on an occasional basis. This tier offers access to our
              high-quality, vetted sitters without the commitment of frequent
              bookings.
            </p>
            <h5 className="font-medium">Benefits Includes</h5>
            <ul className="space-y-2">
              <li> - Access to sitters a limited number of times per month </li>
              <li>
                - Flexibility to schedule as needed without long- term
                commitments
              </li>
              <li>
                - Access to the same level of professionalism and care from
                sitters
              </li>
            </ul>
            <div className="w-[80%] mx-auto">
              <Link href="/family-user/upgrade-plan">
                <Button className="w-full bg-primary-white text-primary-black hover:bg-primary-gray hover:text-primary-white font-semibold">
                  Upgrade
                </Button>
              </Link>
            </div>
            <h4>EXP. Date: 09/22/2024</h4>
          </div>
        </InfoDynamicCard>
      </div>
    </div>
  );
};

export default PlanContainer;
