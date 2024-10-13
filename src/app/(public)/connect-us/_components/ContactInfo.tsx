import Image from "next/image";
import Link from "next/link";
import facebook from "@/assets/icons/facebook.png";
import instagram from "@/assets/icons/instagram.png";

const ContactInfo = () => {
  return (
    <div className="md:space-y-16 space-y-7 ">
      <div>
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-3xl">hi@green.com</p>
      </div>

      <div>
        <h1 className="text-3xl font-bold">Based in</h1>
        <p className="text-2xl font-medium">Based in </p>
        <p className="text-2xl font-medium">Atlanta, GA </p>
      </div>

      <div className="flex gap-x-5 justify-start">
        <Link href={"#"}>
          <Image src={facebook} alt="facebook" width={30} height={30}></Image>
        </Link>

        <Link href={"#"}>
          <Image src={instagram} alt="facebook" width={30} height={30}></Image>
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
