"use client";

import { courses } from "@/db/schema";

type Props = {
  courses: (typeof courses.$inferInsert)[];
};
