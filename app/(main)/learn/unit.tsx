import { lessons, units } from "@/db/schema";

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
  <div></div>;
};
