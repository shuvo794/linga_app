"use client";

import { courses } from "@/db/schema";

type Props = {
  courses: (typeof courses.$inferInsert)[];
  activeCoursesId: number;
};

export const List = ({ courses, activeCoursesId }: Props) => {
  return <div>List</div>;
};
