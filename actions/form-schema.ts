import * as z from "zod";

export const formSchema = z.object({
    content: z.string().min(2, {
        message: "Content must be at least 2 characters.",
    }),
})