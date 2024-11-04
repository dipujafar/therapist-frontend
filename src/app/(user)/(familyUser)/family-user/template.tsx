import UserDashboardSidebar from "@/components/shared/UserProfile/UserDashboardSidebar";
import { ReactNode } from "react";

const template = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen  py-10">
      <div className="items-start gap-x-12 xl:flex">
        <UserDashboardSidebar></UserDashboardSidebar>
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
};

export default template;
