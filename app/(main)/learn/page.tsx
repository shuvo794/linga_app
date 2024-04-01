import { FeedWorper } from "@/components/Feed-Worper/Feed-Worper";
import { StickyWorper } from "@/components/Sticky-Worper/Sticky_Worper";
import { Header } from "./Header";

import { UserProgress } from "@/components/User-Progress/User-Progress";
import {
  getCourseProgress,
  getLessonPercentage,
  getUnits,
  getUserProgress,
} from "@/db/queries";
import { redirect } from "next/navigation";
import { Unit } from "./unit";
import { lessons, units as unitsSchema } from "@/db/schema";

const learnPage = async () => {
  const UserProgressData = getUserProgress();
  const unitData = getUnits();
  const courseProgressData = getCourseProgress();
  const lessonPercentageData = getLessonPercentage();

  const [userProgress, units, courseProgress, lessonPercentage] =
    await Promise.all([
      UserProgressData,
      unitData,
      courseProgressData,
      lessonPercentageData,
    ]);

  if (!userProgress || !userProgress?.activeCourse) {
    redirect("/courses");
  }

  if (!courseProgress) {
    redirect("/courses");
  }
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWorper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          harts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubcription={false}
        />
      </StickyWorper>
      <FeedWorper>
        <Header title={userProgress.activeCourse.title} />
        {units.map((unit) => (
          <div key={unit.id} className="mb-10">
            <Unit
              id={unit.id}
              order={unit.order}
              discription={unit.discription}
              title={unit.title}
              lessons={unit.lessons}
              activeLesson={
                courseProgress.activeLesson as
                  | (typeof lessons.$inferSelect & {
                      unit: typeof unitsSchema.$inferSelect;
                    })
                  | undefined
              }
              activeLessonPercentage={lessonPercentage}
            />
          </div>
        ))}
      </FeedWorper>
    </div>
  );
};

export default learnPage;
