"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useExistModel } from "@/store/use-exist-model";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

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
          <DialogTitle className="text-center font-bold text-2xl">
            Wait , don&apos;t go back !
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            You&apos;re about to leave the lesson.Are you sure ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-2 w-full">
            <Button
              variant="parimary"
              className="w-full"
              size="lg"
              onClick={close}
            >
              Keep Learning
            </Button>
            <Button
              variant="dangerOutline"
              className="w-full"
              size="lg"
              onClick={() => {
                close();
                router.push("/learn");
              }}
            >
              End sesstion
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
