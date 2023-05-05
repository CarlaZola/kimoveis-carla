import { z } from "zod"

const loginSchemaRequest = z.object({
    email: z.string().email().max(45),
    password: z.string().max(120)
})

const loginSchemaReponse = z.object({
    token: z.string()
})


export {
    loginSchemaRequest,
    loginSchemaReponse
}