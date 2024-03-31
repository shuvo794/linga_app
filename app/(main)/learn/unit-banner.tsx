import { Button } from "@/components/ui/button";
import { Notebook } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
  discreption: string;
};

export const UnitBanner = ({ title, discreption }: Props) => {
  return (
    <div className="w-full rounded-md p-5 flex text-white items-center justify-between bg-green-500 mb-10 ">
      <div className="space-y-2.5">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="text-lg">{discreption}</p>
      </div>
      <Link href={"/lesson"}>
        <Button
          size="lg"
          variant="secondary"
          className="hidden xl:flex border-2 border-b-4 active:border-b-2"
        >
          <Notebook className="mr-2" />
          Contineue
        </Button>
      </Link>
    </div>
  );
};
