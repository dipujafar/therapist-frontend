import Image from "next/image";
import icon1 from "@/assets/icons/icon1.png";
import icon2 from "@/assets/icons/icon2.png";
import icon3 from "@/assets/icons/icon3.png";
import Container from "@/components/shared/Container";

const reasons = [
  {
    icon: "/icon1.png",
    title: "Expert Links",
    description:
      "We connect you with highly trained RBT’s, Special Education Teachers, and Paraprofessionals for specialized care.",
  },
  {
    icon: "/icon2.png",
    title: " Trusted Connections",
    description:
      "We focus on building strong, supportive relationships between families and our specialized links..",
  },
  {
    icon: "/icon3.png",
    title: "Commitment to Excellence",
    description:
      "We are dedicated to maintaining the highest standards of care through continuous training and education.",
  },
];

const Incorporated = () => {
  return (
    <div className="section relative">
      <h1 className=" md:text-4xl text-2xl font-semibold px-4 text-center">
        Reason to choose
        <span className="text-primary-violet"> Hue-Man Links Incorporated</span>
      </h1>
      {/* Reasons*/}

      <div className="incorporated-bg pt-24 pb-32">
        <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {reasons?.map((reason, index) => (
            <div key={index} className="flex gap-2">
              <Image
                src={reason.icon}
                alt="reason"
                width={900}
                height={700}
                className="w-24 h-20"
              />
              <div>
                <h1 className="text-2xl font-semibold mt-4">{reason.title}</h1>
                <p className=" mt-1">{reason.description}</p>
              </div>
            </div>
          ))}
        </Container>
      </div>

      <div className=" absolute top-0 right-0 w-[250px] h-[250px] bg-primary-violet/20 rounded-bl-full  overflow-x-hidden"></div>
    </div>
  );
};

export default Incorporated;
