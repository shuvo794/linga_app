"use client";

import { challenges } from "@/db/schema";

type Props = {
  initialPercentage: number;
  initialHearts: number;
  initialLessonId: number;
  initialChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challenges.$inferSelect)[];
  })[];
  userSubcrition: any;
};

export const Quiz = ({
  initialChallenges,
  initialPercentage,
  initialHearts,
  initialLessonId,
  userSubcrition,
}: Props) => {
  return (
    <div>
      <h1>Quiz</h1>
    </div>
  );
};
