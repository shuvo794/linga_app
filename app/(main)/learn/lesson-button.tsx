"use client";
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

  return <div>{id}</div>;
};
