import { cn } from "@/lib/utils";

type Props = {
  id: number;
  active?: boolean;
  title: string;
  imageSrc: string;
  disabled?: boolean;
  onClick: (id: number) => void;
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
      onClick={() => onClick(id)}
      className={cn(
        "h-full ml-3 border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col justify-between items-center p-3 pb-6 min-h-[217px] min-w-[210px]",
        disabled && "pointer-events-none opacity-50"
      )}
    >
      card
    </div>
  );
};
