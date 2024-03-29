import { FeedWorper } from "@/components/Feed-Worper/Feed-Worper";
import { StickyWorper } from "@/components/Sticky-Worper/Sticky_Worper";
import { Header } from "./Header";

import { UserProgress } from "@/components/User-Progress/User-Progress";
import { getUserProgress } from "@/db/queries";

const learnPage = async () => {
  const UserProgressData = getUserProgress();
  const [userProgress] = await Promise.all([UserProgressData]);
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWorper>
        <UserProgress
          activeCourse={{ title: "Spanish", imageSrc: "/es.svg" }}
          harts={5}
          points={100}
          hasActiveSubcription={false}
        />
      </StickyWorper>
      <FeedWorper>
        <Header title="Spanish" />
      </FeedWorper>
    </div>
  );
};

export default learnPage;
