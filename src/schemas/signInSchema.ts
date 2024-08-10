import { z } from "zod";
export const signInSchema = z.object({
    identifier: z.string().length(6, "Verification must be 6 digit"),
});
