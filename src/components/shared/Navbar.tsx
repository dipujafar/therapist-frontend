"use client";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { Button } from "../ui/button";
import { TableOfContents } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

import Container from "./Container";
import { cn } from "@/lib/utils";
import { useState } from "react";
import LoginModal from "./LoginModal";

const about = [
  {
    label: "About Us",
    value: "about-us",
  },
  {
    label: "Our Links",
    value: "our-links",
  },
  {
    label: "Connect with specialized links ",
    value: "specialized-links",
  },
];

const navLinks = [
  {
    label: "Membership & Pricing",
    value: "membership-pricing",
  },
  {
    label: "Connect with Us",
    value: "connect-us",
  },
  {
    label: "FAQs",
    value: "faqs",
  },
];

const Navbar = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const currentPathName = pathname?.split("/")[1];
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <div className={cn(className)}>
      <Container>
        <nav className="flex items-center justify-between gap-x-5  2xl:gap-x-36">
          {/* logo image */}
          <div>
            <Link href={"/"}>
              <Image
                src={logo}
                alt="logo"
                width={1200}
                height={1200}
                className="h-16 lg:h-28 w-auto brightness-110 "
              />
            </Link>
          </div>

          {/* nav link */}
          <div className="flex flex-1 items-center justify-center gap-x-10">
            {/* navLinks */}
            <nav>
              <div className=" hidden lg:flex items-center gap-x-8">
                {/*------------------------ about drop down navLinks ---------------------------------- */}
                <Menubar className="w-fit bg-transparent border-none shadow-none text-primary-white">
                  <MenubarMenu>
                    <MenubarTrigger className="text-lg font-medium hover:bg-primary-orange duration-300 cursor-pointer">
                      About
                    </MenubarTrigger>
                    <MenubarContent>
                      {about?.map((item, idx) => (
                        <div key={idx}>
                          <MenubarItem
                            className={cn(
                              "text-lg font-medium max-w-[180px]",
                              currentPathName === item?.value
                                ? "bg-primary-orange text-primary-white"
                                : ""
                            )}
                          >
                            <Link href={`/${item.value}`}>{item.label}</Link>
                          </MenubarItem>
                          <hr />
                        </div>
                      ))}
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
                {/* -------------------------------------------------- */}

                <ul className=" text-primary-white items-center gap-8 text-light-black lg:flex">
                  {navLinks?.map((item, idx) => (
                    <li
                      key={idx}
                      className={cn(
                        "text-lg font-medium hover:text-primary-orange duration-300",
                        currentPathName === item.value
                          ? "text-primary-orange"
                          : ""
                      )}
                    >
                      <Link href={`/${item.value}`} className="truncate">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <p
                  onClick={() => setOpenLogin(true)}
                  className="text-primary-white font-medium text-lg cursor-pointer"
                >
                  Login
                </p>
              </div>
            </nav>
          </div>
          {/* login button */}

          {/* nav button */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link href={"/link-sitters"}>
              <Button className="bg-primary-blue text-primary-white  py-8 xl:px-10 rounded-full font-medium">
                Become a Link <br /> Sitters
              </Button>
            </Link>

            <Link href={"/make-connection"}>
              <Button className="bg-primary-orange text-primary-white  py-8 xl:px-10 rounded-full font-medium hover:bg-gray-700">
                Make a Connection <br />
                Families
              </Button>
            </Link>
          </div>

          {/* small device view */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <TableOfContents color="#fff" size={24} />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="mx-auto">
                    <div>
                      <Link href={"/"}>
                        <Image
                          src={logo}
                          alt="logo"
                          width={1200}
                          height={1200}
                          className="h-24 w-auto"
                        />
                      </Link>
                    </div>
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-5 grid gap-4 py-4">
                  {/* navLink */}
                  <div className="flex flex-1 flex-col items-center justify-center gap-y-5">
                    <nav>
                      <div className="flex flex-col gap-y-4">
                        {/*------------------------ about drop down navLinks ---------------------------------- */}
                        <Menubar className="w-fit bg-transparent border-none shadow-none ">
                          <MenubarMenu>
                            <MenubarTrigger className="text-lg font-medium hover:bg-primary-orange duration-300 cursor-pointer">
                              About
                            </MenubarTrigger>
                            <MenubarContent>
                              {about?.map((item, idx) => (
                                <div key={idx}>
                                  <MenubarItem
                                    className={cn(
                                      "text-lg font-medium max-w-[180px]",
                                      currentPathName === item?.value
                                        ? "bg-primary-orange text-primary-white"
                                        : ""
                                    )}
                                  >
                                    <Link href={`/${item.value}`}>
                                      {item.label}
                                    </Link>
                                  </MenubarItem>
                                  <hr />
                                </div>
                              ))}
                            </MenubarContent>
                          </MenubarMenu>
                        </Menubar>
                        {/* -------------------------------------------------- */}

                        <ul className="flex flex-col gap-y-4 pl-4 ">
                          {navLinks?.map((item, idx) => (
                            <li
                              key={idx}
                              className={cn(
                                "text-lg font-medium hover:text-primary-orange duration-300",
                                currentPathName === item.value
                                  ? "text-primary-orange"
                                  : ""
                              )}
                            >
                              <Link href={`/${item.value}`}>{item.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </nav>
                  </div>

                  {/* nav icons */}
                  <div className="items-center gap-3 flex flex-col ">
                    <Link href={"/link-sitters"}>
                      <Button className="bg-primary-blue text-primary-white  py-8 px-10 rounded-full font-medium">
                        Become a Link <br /> Sitters
                      </Button>
                    </Link>

                    <Link href={"/make-connection"}>
                      <Button className="bg-primary-orange text-primary-white  py-8 px-10 rounded-full font-medium hover:bg-gray-700">
                        Make a Connection <br />
                        Families
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </Container>
      <LoginModal open={openLogin} setOpen={setOpenLogin}></LoginModal>
    </div>
  );
};

export default Navbar;
