import { z } from "zod";

export const post = z.object({
  slug: z.string(),
  title: z.string(),
  date: z.string(),
  author: z.string(),
  authorRole: z.string(),
  authorAvatar: z.string(),
  excerpt: z.string(),
  content: z.string(),
  image: z.string(),
  tags: z.array(z.string()),
});

export type Post = z.infer<typeof post>;
