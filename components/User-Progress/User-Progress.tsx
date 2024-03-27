import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

type Props = {
  activeCourse: { imgeSrc: string; title: string };
  harts: number;
  points: number;
  hasActiveSubcription: boolean;
};

export const UserProgress = ({
  activeCourse,
  harts,
  points,
  hasActiveSubcription,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/course">
        <Button>
          <Image
            src={activeCourse.imgeSrc}
            alt={activeCourse.title}
            className="rounded-md border"
            width={32}
            height={32}
          />
        </Button>
      </Link>
    </div>
  );
};
