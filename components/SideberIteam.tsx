"use client";

import { Button } from "./ui/button";

type Props = {
  label: string;
  iconSrc: string;
  href: string;
};
const SideberIteam = ({ label, iconSrc, href }: Props) => {
  return <Button>{label}</Button>;
};

export default SideberIteam;
