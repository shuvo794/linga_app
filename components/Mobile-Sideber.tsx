import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SideBer from "@/components/sideber";
const MobileSideber = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent className="p-0 z-[100] w-full " side="left">
        <SideBer className={""} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideber;
