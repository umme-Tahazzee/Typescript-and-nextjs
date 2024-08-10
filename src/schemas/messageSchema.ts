import { z } from "zod";
export const AcceptMessageAchema = z.object({
  content: z
    .string()
    .min(10, "content must be at leat 10 characters")
    .max(300, "content must be no longer than 300 characters"),
});
