"use client";

import { courses } from "@/db/schema";

type Props = {
  courses: (typeof courses.$inferInsert)[];
  activeCoursesId: number;
};

export const List = ({}: Props) => {
  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]">
      List
    </div>
  );
};
