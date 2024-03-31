import { FeedWorper } from "@/components/Feed-Worper/Feed-Worper";
import { StickyWorper } from "@/components/Sticky-Worper/Sticky_Worper";
import { Header } from "./Header";

import { UserProgress } from "@/components/User-Progress/User-Progress";
import { getUnits, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import { Unit } from "./unit";

const learnPage = async () => {
  const UserProgressData = getUserProgress();
  const unitData = getUnits();

  const [userProgress, units] = await Promise.all([UserProgressData, unitData]);

  if (!userProgress || !userProgress?.activeCourse) {
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
              activeLesson={undefined}
              activeLessonPercentage={0}
            />
          </div>
        ))}
      </FeedWorper>
    </div>
  );
};

export default learnPage;
