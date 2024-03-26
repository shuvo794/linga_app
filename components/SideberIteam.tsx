"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

type Props = {
  label: string;
  iconSrc: string;
  href: string;
};
const SideberIteam = ({ label, iconSrc, href }: Props) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Button
      variant={active ? "sideberOutline" : "sideber"}
      className="justify-start h-[52]"
      asChild
    >
      <Link href={href}>
        <Image
          src={iconSrc}
          width={20}
          height={20}
          className="mr-5 "
          alt={label}
        />
        {label}
      </Link>
    </Button>
  );
};

export default SideberIteam;
