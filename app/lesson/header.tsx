"use client";

import { Progress } from "@/components/ui/progress";
import { useExistModel } from "@/store/use-exist-model";
import { InfinityIcon, X } from "lucide-react";
import Image from "next/image";

type Props = {
  hearts: number;
  percentage: number;
  hasActiveSubcription: boolean;
};

export const Header = ({ hearts, percentage, hasActiveSubcription }: Props) => {
  const { open } = useExistModel();
  return (
    <header className="lg:pt-[50px] pt-20 px-10 flex gap-x-7 items-center justify-between max-w-[1140px] mx-auto w-full">
      <X
        onClick={open}
        className="text-slate-500 hover:opacity-75 transition cursor-pointer"
      />
      <Progress value={percentage} />
      <div className="text-rose-500 flex items-center font-bold">
        <Image
          src="/heart.svg"
          width={20}
          height={20}
          alt="hearts"
          className="mr-2"
        />
        {hasActiveSubcription ? (
          <InfinityIcon className="h-5 w-6 stroke-[3]" />
        ) : (
          hearts
        )}
      </div>
    </header>
  );
};
