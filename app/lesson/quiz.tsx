"use client";

import { challengeOptions, challenges } from "@/db/schema";
import { useState } from "react";
import { Header } from "./header";
import { QuesionBubble } from "./quesion-bubble";

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
  const [challenges] = useState(initialLessonChallenges);
  const [activeIndex, setActiveIndex] = useState(() => {
    const unCompletedIndex = challenges.findIndex(
      (challenge) => !challenge.completed
    );
    return unCompletedIndex === -1 ? 0 : unCompletedIndex;
  });

  const challenge = challenges[activeIndex];
  const title =
    challenge.type === "ASSIST"
      ? "Select the correct meenig"
      : challenge.question;
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
              {title}
            </h1>
            <div>
              {challenge.type === "SELECT" && (
                <QuesionBubble question={challenge.question} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
