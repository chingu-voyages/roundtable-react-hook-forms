import { z } from "zod"

export const credentialsSchema = z.object({
     email: z.string().email({ message: "Invalid email" }),
     password: z.string().min(1, { message: "Password is required" }),
})

export type Credentials = z.infer<typeof credentialsSchema>



