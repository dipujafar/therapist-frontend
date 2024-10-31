"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Heart,
  History,
  LayoutDashboard,
  LogOut,
  Menu,
  X,
  Settings,
  ShoppingCart,
  UserRoundPen,
  ImageIcon,
  Camera,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import dummyProfile from "@/assets/Images/dummyProfile.png";

const SIDEBAR_LINKS = [
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
    href: "/user/order-history",
  },
  {
    key: "settings",
    label: "Settings",
    icon: <Settings />,
    href: "/favorite-products",
  },
];

const UserDashboardSidebar = () => {
  const pathname = usePathname();
  const path = pathname?.split("/")[2];
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const router = useRouter();

  const [fileName, setFileName] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

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

  // handle profile change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const file = input.files?.[0];

    console.log(input.files);

    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      setFileName(file.name);
    } else {
      setImageUrl(null); // Clear the image URL if no file was selected
      setFileName(null);
    }

    // Reset the input value to allow selecting the same file again
    input.value = "";
  };

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
              <div className="absolute bottom-1 right-20 z-[9999]  flex flex-col items-center gap-4 w-fit">
                <Button
                  variant="outline"
                  type="button"
                  className="w-fit h-fit flex flex-col items-center justify-center text-gray-600 hover:text-gray-800 border-none shadow-none bg-primary-white p-1 rounded-full"
                >
                  <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                  <label
                    htmlFor="fileInput"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <Camera
                      color="#555656"
                      size={20}
                      className=" border-none"
                    />
                  </label>
                </Button>
              </div>
              {fileName && imageUrl && (
                <div
                  className="cursor-pointer absolute top-0 left-20 bg-primary-blue/70 rounded-md"
                  onClick={() => {
                    setFileName(null);
                    setImageUrl(null);
                  }}
                >
                  <X color="red" size={20} />
                </div>
              )}
            </div>

            {/* user info */}
            <div className="text-center mb-3">
              <h5 className=" text-xl font-medium">Cameron Williamson</h5>
              <p className="text-primary-gray">deanna.curtis@example.com</p>
            </div>
          </div>

          <div className="space-y-2 px-2">
            {SIDEBAR_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className={cn(
                  "flex items-center gap-x-3 px-5 py-4 text-lg rounded text-primary-gray hover:bg-primary-gray hover:text-primary-white  transition-all duration-300 ease-in-out ",
                  pathname === link.href &&
                    " bg-primary-orange text-primary-white",
                  link.href.includes(path) &&
                    " bg-primary-orange  text-primary-white"
                )}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}

            <button
              type="button"
              className="flex items-center gap-x-3 px-5 py-4 text-lg rounded text-primary-gray hover:bg-primary-gray hover:text-primary-white  transition-all duration-300 ease-in-out w-full"
            >
              <LogOut size={25} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardSidebar;
