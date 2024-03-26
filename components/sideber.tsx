import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

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
    </div>
  );
};

export default SideBer;
