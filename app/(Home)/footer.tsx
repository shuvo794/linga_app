import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="hidden lg:block h-20 border-t-2 border-slate-200 p-2">
      <div className="max-w-screen mx-auto flex items-center justify-evenly">
        <Button size="lg" variant="ghost">
          <Image
            className="mr-4 rounded-md"
            width={32}
            height={40}
            src="/hr.svg"
            alt="Croatain"
          />
          Croatain
        </Button>
        <Button size="lg" variant="ghost">
          <Image
            className="mr-4 rounded-md"
            width={32}
            height={40}
            src="/es.svg"
            alt="spanish "
          />
          Spanish
        </Button>
        <Button size="lg" variant="ghost">
          <Image
            className="mr-4 rounded-md"
            width={32}
            height={40}
            src="/jp.svg"
            alt="Japan"
          />
          Japan
        </Button>
        <Button size="lg" variant="ghost">
          <Image
            className="mr-4 rounded-md"
            width={32}
            height={40}
            src="/fr.svg"
            alt="France"
          />
          France
        </Button>
        <Button size="lg" variant="ghost">
          <Image
            className="mr-4 rounded-md"
            width={32}
            height={40}
            src="/it.svg"
            alt="italy"
          />
          Italy
        </Button>
      </div>
    </div>
  );
};

export default Footer;
