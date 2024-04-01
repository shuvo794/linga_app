import { X } from "lucide-react";

type Props = {
  hearts: number;
  percentage: number;
  hasActiveSubcription: boolean;
};

export const Header = ({ hearts, percentage, hasActiveSubcription }: Props) => {
  return (
    <header className="lg:pt-[50px] pt-20 px-10 flex gap-x-7 items-center justify-between max-w-[1140px] mx-auto w-full">
      <X className="text-slate-500 hover:opacity-75 transition cursor-pointer" />
    </header>
  );
};
