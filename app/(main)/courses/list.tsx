"use client";

import { courses } from "@/db/schema";
import { Card } from "./card";

type Props = {
  courses: (typeof courses.$inferInsert)[];
  activeCoursesId: number;
};

export const List = ({ courses, activeCoursesId }: Props) => {
  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          active={course.id === activeCoursesId}
          title={course.title}
          imageSrc={course.imageSrc}
          disabled={false}
          onClick={() => {}}
        />
      ))}
    </div>
  );
};
