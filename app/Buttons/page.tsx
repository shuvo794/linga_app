import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="p-4 space-y-4 flex flex-col mx-w-[200px]">
      <Button>Default</Button>
      <Button variant="parimary">Primary</Button>
      <Button variant="primaryOutline"> Primary Outline </Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="secondaryOutline"> secondary Outline </Button>
    </div>
  );
};

export default page;
