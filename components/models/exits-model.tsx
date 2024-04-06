"use client";

import { Dialog } from "@/components/ui/dialog";
import { useExistModel } from "@/store/use-exist-model";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const ExistModel = () => {
  const router = useRouter();
  const [isclient, setIsClient] = useState(false);
  const { isOpen, close } = useExistModel();

  useEffect(() => setIsClient(true), []);
  if (!isclient) {
    return null;
  }
  return <Dialog open={isOpen} onOpenChange={close}></Dialog>;
};
