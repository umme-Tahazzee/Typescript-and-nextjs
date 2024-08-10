import { z } from "zod";

export const usernameValidation = z
.string()
.min(2,"username must be at least 2 characters")
.max(20, "username must be no more than 20 characters")
.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please use a valid email address')



export const signUpSchema = z.object({
      username: usernameValidation,
      email : z.string().email({message: "Invalid email address"}),
      password : z.string().min(6, {message: 'pass must be at leat 6 characters'})
})