import Container from "@/components/shared/Container";
import Image from "next/image";
import steps from "@/assets/images/specialized-links/steps.png";

const HowToConnect = () => {
  return (
    <Container className="section">
      <h1 className="md:text-6xl text-3xl text-primary-blue text-center font-medium">
        How to connect with <br />
        specialized links
      </h1>
      <Image
        src={steps}
        alt="steps"
        className="md:mt-28 mt-10 w-fit mx-auto"
      ></Image>
    </Container>
  );
};

export default HowToConnect;
