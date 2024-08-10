import { z } from "zod";
export const verfiySchema = z.object({
  code: z.string().length(6, "Verification must be 6 digit"),
});
