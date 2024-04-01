import { cache } from "react";
import db from "./drizzel";
import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import {
  challengeProgress,
  courses,
  lessons,
  units,
  userProgress,
} from "@/db/schema";

export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany();
  return data;
});

export const getUserProgress = cache(async () => {
  const { userId } = await auth();
  if (!userId) {
    return null;
  }

  const data = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: {
      activeCourse: true,
    },
  });
  return data;
});

export const getUnits = cache(async () => {
  const { userId } = await auth();
  const userProgress = await getUserProgress();
  if (!userId || !userProgress?.activeCourseId) {
    return [];
  }
  const data = await db.query.units.findMany({
    where: eq(units.courseId, userProgress.activeCourseId),
    with: {
      lessons: {
        with: {
          challenges: {
            with: {
              challengeProgress: {
                where: eq(challengeProgress.userId, userId),
              },
            },
          },
        },
      },
    },
  });
  const normalizedsData = data.map((unit) => {
    const lessionWithCompletedStatus = unit.lessons.map((lesson) => {
      const allCompletedChallenges = lesson.challenges.every((challenge) => {
        return (
          challenge.challengeProgress &&
          challenge.challengeProgress.length > 0 &&
          challenge.challengeProgress.every((progress) => {
            progress.completed;
          })
        );
      });
      return { ...lesson, completed: allCompletedChallenges };
    });
    return { ...unit, lessons: lessionWithCompletedStatus };
  });
  return normalizedsData;
});

export const getCourseById = cache(async (courseId: number) => {
  const data = await db.query.courses.findFirst({
    where: eq(courses.id, courseId),
    // Tudo :populate unit and lession
  });
  return data;
});

export const getCourseProgress = cache(async () => {
  const { userId } = await auth();

  const userProgress = await getUserProgress();
  if (!userId || !userProgress?.activeCourseId) {
    return null;
  }
  const unitsActiveCourse = await db.query.units.findMany({
    orderBy: (units, { asc }) => [asc(units.order)],
    where: eq(units.courseId, userProgress.activeCourseId),
    with: {
      lessons: {
        orderBy: (lessons, { asc }) => [asc(lessons.order)],
        with: {
          unit: true,
          challenges: {
            with: {
              challengeProgress: {
                where: eq(challengeProgress.userId, userId),
              },
            },
          },
        },
      },
    },
  });
  const firstUnCompletedLesson = unitsActiveCourse
    .flatMap((unit) => unit.lessons)
    .find((lesson) => {
      return lesson.challenges.some((challenge) => {
        return (
          !challenge.challengeProgress ||
          challenge.challengeProgress.length === 0
        );
      });
    });
  return {
    activeLesson: firstUnCompletedLesson,
    activeLessonId: firstUnCompletedLesson?.id,
  };
});

export const getLesson = cache(async () => {
  const { userId } = await auth();
  const courseProgress = await getCourseProgress();
  const lessonId = courseProgress?.activeLessonId;
  if (!lessonId) {
    return null;
  }
});
