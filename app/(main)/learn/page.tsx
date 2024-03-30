import { FeedWorper } from "@/components/Feed-Worper/Feed-Worper";
import { StickyWorper } from "@/components/Sticky-Worper/Sticky_Worper";
import { Header } from "./Header";

import { UserProgress } from "@/components/User-Progress/User-Progress";
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

const learnPage = async () => {
  const UserProgressData = getUserProgress();
  const [userProgress] = await Promise.all([UserProgressData]);

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
      </FeedWorper>
    </div>
  );
};

export default learnPage;
