"use client";
import Link from "next/link";

import { Check, Crown, Star } from "lucide-react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import "react-circular-progressbar/dist/styles.css";
type Props = {
  id: number;
  index: number;
  totalCount: number;
  locked?: boolean;
  current?: boolean;
  percentage: number;
};

export const LessonButton = ({
  id,
  index,
  totalCount,
  locked,
  current,
  percentage,
}: Props) => {
  const cycleLength = 8;
  const cycleIndex = index % cycleLength;
  let indentionalLevel;
  if (cycleIndex <= 2) {
    indentionalLevel = cycleIndex;
  } else if (cycleIndex <= 4) {
    indentionalLevel = 4 - cycleIndex;
  } else if (cycleIndex <= 6) {
    indentionalLevel = 4 - cycleIndex;
  } else {
    indentionalLevel = cycleIndex - 8;
  }

  const rightPossition = indentionalLevel * 40;
  const isFirst = index === 0;
  const isLast = index === totalCount;
  const isComplete = !current && !locked;
  const Icon = isComplete ? Check : isLast ? Crown : Star;
  const herf = isComplete ? `/lesson/${id}` : "/lesson";

  return (
    <Link
      href={herf}
      aria-disabled={locked}
      style={{ pointerEvents: locked ? "none" : "auto" }}
    >
      <div
        className="relative"
        style={{
          right: `${rightPossition}px`,
          marginTop: isFirst && !isComplete ? 60 : 24,
        }}
      >
        {id}
      </div>
    </Link>
  );
};
