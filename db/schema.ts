import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
} from "drizzle-orm/pg-core";

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  imageSrc: text("image_src").notNull(),
});

export const coursesRelationships = relations(courses, ({ many }) => ({
  userProgress: many(userProgress),
  units: many(units),
}));
export const units = pgTable("units", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  discription: text("discription").notNull(),
  courseId: integer("course_id")
    .notNull()
    .references(() => courses.id, {
      onDelete: "cascade",
    })
    .notNull(),
  order: integer("order").notNull(),
});

export const unitsRelationships = relations(units, ({ many, one }) => ({
  courses: one(courses, {
    fields: [units.courseId],
    references: [courses.id],
  }),
  lesson: many(lessons),
}));

export const lessons = pgTable("lessons", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  discription: text("discription").notNull(),
  unitId: integer("unit_id")
    .notNull()
    .references(() => units.id, {
      onDelete: "cascade",
    })
    .notNull(),
  order: integer("order").notNull(),
});

export const lessonsRelationships = relations(lessons, ({ one, many }) => ({
  units: one(units, {
    fields: [lessons.unitId],
    references: [units.id],
  }),
  challanges: many(challenges),
}));

export const challengesEnum = pgEnum("type", ["SELECT", "ASSIST"]);

export const challenges = pgTable("challenges", {
  id: serial("id").primaryKey(),
  lessonId: integer("lesson_id")
    .notNull()
    .references(() => lessons.id, {
      onDelete: "cascade",
    })
    .notNull(),
  type: challengesEnum("type").notNull(),
  question: text("question").notNull(),
  order: integer("order").notNull(),
});

export const challengesRelationships = relations(
  challenges,
  ({ one, many }) => ({
    lesson: one(lessons, {
      fields: [challenges.lessonId],
      references: [lessons.id],
    }),
    challengeOptions: many(challengesOptions),
    challangeProgress: many(challangeProgress),
  })
);

export const challengesOptions = pgTable("challengesOptions", {
  id: serial("id").primaryKey(),
  challengesId: integer("challenges_id")
    .notNull()
    .references(() => challenges.id, {
      onDelete: "cascade",
    })
    .notNull(),
  text: text("text").notNull(),
  correct: boolean("correct").notNull(),
  imageSrc: text("image_src"),
  audioSrc: text("audio_src"),
});

export const challengesOptionsRelationships = relations(
  challengesOptions,
  ({ one }) => ({
    challenge: one(challenges, {
      fields: [challengesOptions.challengesId],
      references: [challenges.id],
    }),
  })
);

export const challangeProgress = pgTable("challange_progress", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(), // TODO: confarm this doesn't break
  challengesId: integer("challenges_id")
    .references(() => challenges.id, {
      onDelete: "cascade",
    })
    .notNull(),
  compeleted: boolean("compeleted").notNull().default(false),
});

export const challangeProgressRelationships = relations(
  challangeProgress,
  ({ one }) => ({
    challenge: one(challenges, {
      fields: [challangeProgress.challengesId],
      references: [challenges.id],
    }),
  })
);

export const userProgress = pgTable("user_progress", {
  userId: text("user_id").primaryKey(),
  userName: text("user_name").notNull().default("User"),
  userImageSrc: text("user_image_src").notNull().default("/mascot.svg"),
  activeCourseId: integer("active_course_id").references(() => courses.id, {
    onDelete: "cascade",
  }),
  hearts: integer("hearts").notNull().default(5),
  points: integer("points").notNull().default(0),
});

export const userProgressRelationships = relations(userProgress, ({ one }) => ({
  activeCourse: one(courses, {
    fields: [userProgress.activeCourseId],
    references: [courses.id],
  }),
}));
