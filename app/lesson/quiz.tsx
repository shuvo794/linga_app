"use client";

import { challengeOptions, challenges } from "@/db/schema";
import { useState } from "react";
import { Header } from "./header";

type Props = {
  initialPercentage: number;
  initialHearts: number;
  initialLessonId: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challengeOptions.$inferSelect)[];
  })[];
  userSubcrition: any;
};

export const Quiz = ({
  initialLessonChallenges,
  initialPercentage,
  initialHearts,
  initialLessonId,
  userSubcrition,
}: Props) => {
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(initialPercentage);
  return (
    <>
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubcription={!!userSubcrition?.isActive}
      />
      <div className="flex-1">
        <div className="h-full flex items-center justify-center">
          <div className="lg:min-h-[350px] lg:w-[600px] w-full px-6 lg:px-0 flex flex-col gap-y-12">
            <h1 className="text-lg text-center font-bold lg:text-3xl lg:text-start text-neutral-700 ">
              Which of these is an apple?
            </h1>
            <div>{/* Tuddo challenge components */}</div>
          </div>
        </div>
      </div>
    </>
  );
};
