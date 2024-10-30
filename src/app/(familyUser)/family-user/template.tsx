import React, { ReactNode } from "react";
import FamilyUserDashboardSidebar from "./_components/FamilyUserDashboardSidebar";

const template = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-primary-white py-10">
      <div className="items-start gap-x-8 xl:flex">
        <FamilyUserDashboardSidebar />
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
};

export default template;
