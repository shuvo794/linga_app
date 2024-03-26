"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

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
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default SideberIteam;
