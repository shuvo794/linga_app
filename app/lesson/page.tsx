import { getLesson, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

const lessonPage = async () => {
  const lessonData = await getLesson();
  const userProgressData = await getUserProgress();
  const [lesson, userProgress] = await Promise.all([
    lessonData,
    userProgressData,
  ]);

  if (!lesson || !userProgress) {
    redirect("/learn");
  }
  return (
    <div>
      <h2>This is a lesson page</h2>
    </div>
  );
};

export default lessonPage;
