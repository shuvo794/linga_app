import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./list";

const Courses = async () => {
  const coursesData = await getCourses();
  const userProgressData = await getUserProgress();
  const [courses, userProgress] = await Promise.all([
    coursesData,
    userProgressData,
  ]);
  return (
    <div className="h-full max-w-[912px] mx-auto">
      <h2 className="text-2xl font-bold text-neutral-700 ml-3">
        Language courses
      </h2>
      <List courses={courses} activeCoursesId={userProgress?.activeCourseId} />
    </div>
  );
};

export default Courses;
