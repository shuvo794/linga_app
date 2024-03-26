import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SideBer, { sideBer } from "@/components/sideber";
const MobileSideber = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent>
        <SideBer />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideber;
