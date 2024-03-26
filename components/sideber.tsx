import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import SideberIteam from "./SideberIteam";

import { UserButton, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className: string;
};

export const SideBer = ({ className }: Props) => {
  return (
    <div
      className={cn(
        " lg:w-[256px] h-full lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pb-8 flex items-center gap-x-3">
          <Image src="/mascot.svg" width={40} height={40} alt="" />
          <h3 className="text-3xl font-bold text-green-600">Linga</h3>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SideberIteam iconSrc="/learn.svg" label="Learn" href="/learn" />

        <SideberIteam
          iconSrc="/leaderboard.svg"
          label="leaderboard"
          href="/leaderboard"
        />
        <SideberIteam iconSrc="/quests.svg" label="Quests" href="/Quests" />
        <SideberIteam iconSrc="/shop.svg" label="Shop" href="/shop" />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="animate-spin h-5 w-5 text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default SideBer;
