import { cn } from "@/lib/utils";
import MembershipPlan from "./MembershipPlan";
import PlanCards from "./PlanCards";
import PlanCards2 from "./PlanCards2";

const MembershipPlanContainer = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 xl:grid-cols-3 justify-between items-center gap-x-4",
        className
      )}
    >
      <div className="col-span-2 grid grid-cols-1 xl:grid-cols-2 justify-between items-center gap-x-4">
        <MembershipPlan></MembershipPlan>
        <PlanCards></PlanCards>
      </div>
      <PlanCards2></PlanCards2>
    </div>
  );
};

export default MembershipPlanContainer;
