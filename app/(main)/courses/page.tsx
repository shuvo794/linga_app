import { getCourses } from "@/db/queries";

const Courses = async () => {
  const data = await getCourses();
  return (
    <div className="h-full max-w-[912px] mx-auto">
      <h2 className="text-2xl font-bold text-neutral-700">courses</h2>
      {JSON.stringify(data)}
    </div>
  );
};

export default Courses;
