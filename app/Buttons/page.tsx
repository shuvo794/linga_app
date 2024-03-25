import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="p-4 space-y-4 flex flex-col mx-w-[200px]">
      <Button>Default</Button>
      <Button variant="parimary">Primary</Button>
      <Button variant="primaryOutline"> Primary Outline </Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="secondaryOutline"> secondary Outline </Button>
      <Button variant="danger">danger</Button>
      <Button variant="dangerOutline"> danger Outline </Button>
      <Button variant="super">Super</Button>
      <Button variant="superOutline"> Super Outline </Button>
      <Button variant="ghost"> ghost </Button>
      <Button variant="sideber">Sideber</Button>
      <Button variant="sideberOutline"> Sideber Outline </Button>
    </div>
  );
};

export default page;
