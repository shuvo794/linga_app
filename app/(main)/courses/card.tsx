import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

type Props = {
  title: string;
  id?: number;
  imageSrc: string;
  onClick: (id: number) => void;
  disabled?: boolean;
  active?: boolean;
};

export const Card = ({
  id,
  active,
  title,
  imageSrc,
  disabled,
  onClick,
}: Props) => {
  return (
    <div
      onClick={() => id !== undefined && onClick(id)}
      className={cn(
        "h-full ml-3 border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col justify-between items-center p-3 pb-6 min-h-[217px] min-w-[210px]",
        disabled && "pointer-events-none opacity-50"
      )}
    >
      <div className="min-[24px] w-full  flex items-center justify-end">
        {active && (
          <div className="rounded-full bg-green-500 p-1 flex items-center">
            <Check className="text-white stroke-[4] h-4 w-4" />
          </div>
        )}
      </div>
      <Image
        src={imageSrc}
        alt={title}
        width={93.33}
        height={70}
        className="rounded-lg drop-shadow-md border object-cover"
      />
      <p className="text-center font-semibold mt-3 text-neutral-400">{title}</p>
    </div>
  );
};
