import { cn } from "@/lib/utils";
import Image from "next/image";

const UserCard = ({ user, active }: { user: any; active: boolean }) => {
  const { img, name, latestMsg } = user;
  return (
    <div
      className={`flex gap-x-4 ${
        active ? "bg-primary-orange text-primary-white p-2 rounded" : ""
      }`}
    >
      <div className="w-[16%]">
        <Image src={img} alt={name} className="w-full rounded-full" />
      </div>

      <div className="flex-grow space-y-1">
        <div className="flex items-center justify-between">
          <h4
            className={cn(
              "text-xl font-medium text-primary-black",
              active && "text-primary-white"
            )}
          >
            {name}
          </h4>
          <p className="font-semibold text-secondary-2 text-primary-gray">
            12m
          </p>
        </div>
        <p className="text-ellipsis">{latestMsg}</p>
      </div>
    </div>
  );
};

export default UserCard;
