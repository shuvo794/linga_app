import { FeedWorper } from "@/components/Feed-Worper/Feed-Worper";
import { StickyWorper } from "@/components/Sticky-Worper/Sticky_Worper";
import { Header } from "./Header";
import { time } from "console";
import { title } from "process";
import { UserProgress } from "@/components/User-Progress/User-Progress";

const learnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWorper>
        <UserProgress
          activeCourse={{ title: "Spanish", imgeSrc: "/es.svg" }}
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
