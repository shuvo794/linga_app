import { lessons, units } from "@/db/schema";
import { UnitBanner } from "./unit-banner";

type Props = {
  id: number;
  title: string;
  order: number;
  discription: string;
  lessons: (typeof lessons.$inferSelect & { completed: boolean })[];
  activeLesson:
    | (typeof lessons.$inferSelect & { unit: typeof units.$inferSelect })
    | undefined;
  activeLessonPercentage: number;
};

export const Unit = ({
  id,
  title,
  order,
  discription,
  lessons,
  activeLesson,
  activeLessonPercentage,
}: Props) => {
  return (
    <>
      <UnitBanner title={title} discreption={discription} />
      <div className="flex items-center flex-col relative">
        {lessons.map((lesson, index) => {
          const isCurrent = lesson.id === activeLesson?.id;
          const isLocked = !lesson.completed && !isCurrent;
          return <LessonButton />;
        })}
      </div>
    </>
  );
};
