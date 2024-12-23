import { Metadata } from "next";
import AllBabySittersContainer from "./_components/AllBabySittersContainer";

export const metadata: Metadata = {
  title: "All Babysitters",
  description: "Generated by create next app",
};

const AllBabySitter = () => {
  return (
    <div>
      <AllBabySittersContainer></AllBabySittersContainer>
    </div>
  );
};

export default AllBabySitter;
