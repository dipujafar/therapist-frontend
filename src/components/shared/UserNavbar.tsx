"use client";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import {
  CalendarDays,
  Heart,
  MessageCircleMore,
  TableOfContents,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { cn } from "@/lib/utils";
import userProfile from "@/assets/Images/family-user/userProfileDummyImage.png";

const navLinks = [
  {
    label: "Babysitter",
    value: "all-babysitters",
  },
  {
    label: "About",
    value: "about-us",
  },
  {
    label: "Contact Us",
    value: "connect-us",
  },
];

const UserNavbar = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const currentPathName = pathname?.split("/")[1];
  const role = "babySitter";

  // Function to handle category selection

  return (
    <div className={cn(className)}>
      <nav className="flex items-center justify-between gap-x-5  2xl:gap-x-36 py-4 lg:py-6">
        {/* logo image */}
        <div>
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo"
              width={1200}
              height={1200}
              className="h-10 lg:h-auto w-auto brightness-110 "
            />
          </Link>
        </div>

        {/* nav link */}
        <div className="flex flex-1 items-center justify-center gap-x-10">
          {/* navLinks */}
          <nav>
            <div className="hidden lg:flex gap-x-8">
              <ul className="  items-center gap-8 text-light-black lg:flex">
                {navLinks?.map((item, idx) => (
                  <li
                    key={idx}
                    className={cn(
                      "text-lg font-medium text-primary-orange hover:text-primary-blue duration-300",
                      currentPathName === item.value ? "text-primary-blue" : ""
                    )}
                  >
                    <Link href={`/${item.value}`}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* nav icons  and user profile*/}
        <div className="hidden lg:flex items-center justify-center gap-x-5">
          {role === "familyUser" && (
            <Link href={"/favorite-babysitter"}>
              <Heart
                fill={
                  currentPathName === "favorite-babysitter"
                    ? "#F26D6D"
                    : "#F2F2F2"
                }
                className={
                  currentPathName === "favorite-babysitter"
                    ? "text-primary-orange"
                    : ""
                }
              />
            </Link>
          )}

          <Link href={"/book-sitter"} className="relative">
            <CalendarDays
              className={cn(
                currentPathName === "book-sitter" ? "text-primary-orange" : ""
              )}
            />
          </Link>
          <Link href={"/"}>
            <MessageCircleMore />
          </Link>
          <Link href={"/family-user/profile-details"}>
            <Image src={userProfile} alt="user profile"></Image>
          </Link>
        </div>

        {/* small device view */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <TableOfContents color="#5F6368" size={24} />
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
                      <ul className="flex flex-col gap-y-4 pl-4 ">
                        {navLinks?.map((item, idx) => (
                          <li
                            key={idx}
                            className={cn(
                              "text-lg font-medium text-primary-orange hover:text-primary-blue duration-300",
                              currentPathName === item.value
                                ? "text-primary-blue"
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

                {/* nav icons  and user profile*/}
                <div className=" flex items-center justify-center gap-x-5">
                  {role === "familyUser" && (
                    <Link href={"/favorite-babysitter"}>
                      <Heart
                        fill={
                          currentPathName === "favorite-babysitter"
                            ? "#F26D6D"
                            : "#F2F2F2"
                        }
                        className={
                          currentPathName === "favorite-babysitter"
                            ? "text-primary-orange"
                            : ""
                        }
                      />
                    </Link>
                  )}

                  <Link href={"/book-sitter"} className="relative">
                    <CalendarDays
                      className={cn(
                        currentPathName === "book-sitter"
                          ? "text-primary-orange"
                          : ""
                      )}
                    />
                  </Link>
                  <Link href={"/"}>
                    <MessageCircleMore />
                  </Link>
                  <Link href={"/family-user/profile-details"}>
                    <Image src={userProfile} alt="user profile"></Image>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
};

export default UserNavbar;
