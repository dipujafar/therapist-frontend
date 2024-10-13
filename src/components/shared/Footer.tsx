import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import facebook from "@/assets/icons/facebook.png";
import instagram from "@/assets/icons/instagram.png";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-primary-orange py-16 mt-32">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between justify-center gap-y-20 flex-wrap">
          {/* Logo and icons */}
          <div className="">
            <div className="bg-primary-white w-fit h-fit p-2 rounded mx-auto">
              <Link href={"/"}>
                <Image
                  src={logo}
                  alt="logo"
                  width={106}
                  height={61}
                  className="size-auto"
                />
              </Link>
            </div>
            <div className="flex gap-x-5 justify-center mt-4">
              <Link href={"#"}>
                <Image
                  src={facebook}
                  alt="facebook"
                  width={30}
                  height={30}
                ></Image>
              </Link>

              <Link href={"#"}>
                <Image
                  src={instagram}
                  alt="facebook"
                  width={30}
                  height={30}
                ></Image>
              </Link>
            </div>
          </div>

          {/*  Information */}

          <div>
            <h3 className="text-primary-white text-2xl font-medium mb-8">
              Information
            </h3>
            <ul className="text-primary-white space-y-5">
              <li>
                <Link href="/#">Pricing</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link href="/faqs">FAQs</Link>
              </li>
            </ul>
          </div>

          {/*  Help & Support */}
          <div>
            <h3 className="text-primary-white text-2xl font-medium mb-4">
              Help & Support
            </h3>

            <div className="text-primary-white space-y-5 flex justify-center items-center gap-2">
              <Mail className="inline" /> Email :
              <div>
                <p>youremail@gmail.com</p>
                <p>letstalk@gmail.com</p>
              </div>
            </div>

            <div className="text-primary-white space-y-5 flex justify-center items-center gap-2">
              <Phone className="inline" />
              Phone :
              <div>
                <p>( +1 ) (888) 750-6866</p>
                <p>( +1 ) (888) 785-3986</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
