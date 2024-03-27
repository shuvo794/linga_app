import { FeedWorper } from "@/components/Feed-Worper/Feed-Worper";
import { StickyWorper } from "@/components/Sticky-Worper/Sticky_Worper";

const learnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWorper>My Sticky Worper</StickyWorper>
      <FeedWorper>My feedWorper</FeedWorper>
    </div>
  );
};

export default learnPage;
