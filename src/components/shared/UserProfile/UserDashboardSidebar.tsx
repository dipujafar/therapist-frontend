"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  History,
  LogOut,
  Menu,
  X,
  Settings,
  UserRoundPen,
  Camera,
  LibraryBig,
  StarHalf,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import dummyProfile from "@/assets/Images/dummyProfile.png";

const Family_USER_SIDEBAR_LINKS = [
  {
    key: "profile-details",
    label: "Profile Details",
    icon: <UserRoundPen />,
    href: "/family-user/profile-details",
  },
  {
    key: "my-plan",
    label: "My Plan",
    icon: <History size={25} />,
    href: "/family-user/plan",
  },
  {
    key: "settings",
    label: "Settings",
    icon: <Settings />,
    href: "/family-user/settings",
  },
];
const SITTER_SIDEBAR_LINKS = [
  {
    key: "profile-details",
    label: "Profile Details",
    icon: <UserRoundPen />,
    href: "/baby-sitter/profile-details",
  },
  {
    key: "others-information",
    label: "Others Information",
    icon: <LibraryBig size={25} />,
    href: "/baby-sitter/other-information",
  },
  {
    key: "review-rating",
    label: "Review & Rating",
    icon: <StarHalf size={25} />,
    href: "/baby-sitter/review-rating",
  },
  {
    key: "settings",
    label: "Settings",
    icon: <Settings />,
    href: "/baby-sitter/settings",
  },
];

const UserDashboardSidebar = () => {
  const pathname = usePathname();
  const path = pathname?.split("/")[2].split("-")[1];
  const subpath = pathname?.split("/")[2];
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setRole(storedRole);
    }
  }, [role]);

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Close the sidebar when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    const sidebar = document.getElementById("dashboardSidebar");
    if (sidebar && !sidebar.contains(event.target as Node)) {
      setIsSidebarVisible(false);
    }
  };

  useEffect(() => {
    if (isSidebarVisible) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isSidebarVisible]);

  return (
    <div>
      {/* Menu Toggle Button for mobile/tablet devices */}
      <div className="p-4 xl:hidden">
        <button
          onClick={toggleSidebar}
          className="text-gray-500 hover:text-gray-700"
        >
          {isSidebarVisible ? <X size={28} /> : <Menu size={28} />}{" "}
          {/* Toggle between Menu and Close (X) icons */}
        </button>
      </div>

      {/* Sidebar */}
      <div
        id="dashboardSidebar"
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out xl:relative xl:transform-none xl:shadow-none ${
          isSidebarVisible
            ? "translate-x-0"
            : "-translate-x-full xl:translate-x-0"
        }`}
      >
        <div>
          {/* profile image and user info */}
          <div>
            {/* user profile */}
            <div className="relative mb-3">
              <Image
                src={imageUrl ? imageUrl : dummyProfile}
                alt="dummyProfile"
                width={900}
                height={700}
                className="size-24 rounded-full mx-auto shadow-md"
              ></Image>
            </div>

            {/* user info */}
            <div className="text-center mb-3">
              <h5 className=" text-xl font-medium">Cameron Williamson</h5>
              <p className="text-primary-gray">deanna.curtis@example.com</p>
            </div>
          </div>

          <div className=" px-2 ">
            {role === "familyUser"
              ? Family_USER_SIDEBAR_LINKS?.map((link) => (
                  <Link
                    href={link.href}
                    key={link.key}
                    className={cn(
                      "flex items-center gap-x-3 px-5 py-3 text-lg rounded text-primary-gray hover:bg-primary-gray hover:text-primary-white  transition-all duration-300 ease-in-out ",
                      pathname === link.href &&
                        " bg-primary-orange text-primary-white",
                      link.href.includes(path) &&
                        " bg-primary-orange  text-primary-white",
                      link.href.includes(subpath) &&
                        " bg-primary-orange  text-primary-white"
                    )}
                  >
                    {link.icon}
                    <span className="truncate">{link.label}</span>
                  </Link>
                ))
              : SITTER_SIDEBAR_LINKS?.map((link) => (
                  <Link
                    href={link.href}
                    key={link.key}
                    className={cn(
                      "flex items-center gap-x-3 px-5 py-3 text-lg rounded text-primary-gray hover:bg-primary-gray hover:text-primary-white  transition-all duration-300 ease-in-out ",
                      pathname === link.href &&
                        " bg-primary-orange text-primary-white",
                      link.href.includes(path) &&
                        " bg-primary-orange  text-primary-white",
                      link.href.includes(subpath) &&
                        " bg-primary-orange  text-primary-white"
                    )}
                  >
                    {link.icon}
                    <span className="truncate">{link.label}</span>
                  </Link>
                ))}

            <Link href="/">
              <button
                type="button"
                className="flex items-center gap-x-3 px-5 py-4 text-lg rounded text-primary-gray hover:bg-primary-gray hover:text-primary-white  transition-all duration-300 ease-in-out w-full"
              >
                <LogOut size={25} />
                <span>Logout</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardSidebar;
