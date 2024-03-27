import { FeedWorper } from "@/components/Feed-Worper/Feed-Worper";
import { StickyWorper } from "@/components/Sticky-Worper/Sticky_Worper";
import { Header } from "./Header";

const learnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWorper>My Sticky Worper</StickyWorper>
      <FeedWorper>
        <Header title="Spanish" />
      </FeedWorper>
    </div>
  );
};

export default learnPage;
