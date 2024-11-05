import UserDashboardSidebar from "@/components/shared/UserProfile/UserDashboardSidebar";
import React, { ReactNode } from "react";

const BabySitterTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen  py-10">
      <div className="items-start gap-x-20 xl:flex">
        <UserDashboardSidebar></UserDashboardSidebar>
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
};

export default BabySitterTemplate;
