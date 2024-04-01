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

  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;
  return (
    <Quiz
      initialLessonId={lesson.id}
      initialChallenges={lesson.challenges}
      initialHearts={userProgress.hearts}
      initialPercentage={initialPercentage}
      userSubcrition={undefined}
    />
  );
};

export default lessonPage;
