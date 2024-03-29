import { cache } from "react";
import db from "./drizzel";
import { auth } from "@clerk/nextjs";

export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany();
  return data;
});

export const getUserProgress = cache(async () => {
  const { userId } = await auth();
});
