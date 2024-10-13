import Link from "next/link";
import Hero from "./Hero";
import Incorporated from "./Incorporated";
import SetUsApart from "./SetUsApart";
import SpecializedSitters from "./SpecializedSitters";
import { Button } from "@/components/ui/button";

const HomeContainer = () => {
  return (
    <div>
      <Hero></Hero>
      <Incorporated></Incorporated>
      <SpecializedSitters></SpecializedSitters>
      <SetUsApart></SetUsApart>
      <Link href={"#"} className="flex justify-center mt-32">
        <Button className="bg-primary-orange py-6 px-8">
          Make A Connection
        </Button>
      </Link>
    </div>
  );
};

export default HomeContainer;
