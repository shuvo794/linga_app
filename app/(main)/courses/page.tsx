import { getCourses } from "@/db/queries";
import { List } from "lucide-react";

const Courses = async () => {
  const courses = await getCourses();
  return (
    <div className="h-full max-w-[912px] mx-auto">
      <h2 className="text-2xl font-bold text-neutral-700">Language courses</h2>
      <List courses={courses} activeCoursesId={1} />
    </div>
  );
};

export default Courses;
