"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useExistModel } from "@/store/use-exist-model";
import Image from "next/image";
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
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex justify-center items-center w-full mb-5">
            <Image src="/mascot_sad.svg" width={80} height={80} alt="mascot" />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
