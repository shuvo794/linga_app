import { MobileHeader } from "@/components/Mobile-header";
import SideBer from "@/components/sideber";

type Props = {
  children: React.ReactNode;
};

const mainLayout = ({ children }: Props) => {
  return (
    <>
      <MobileHeader />
      <SideBer className="hidden lg:flex" />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className="max-w-[1056px] max-auto pt-6  h-full">{children}</div>
      </main>
    </>
  );
};

export default mainLayout;
